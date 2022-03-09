import { useSphere } from '@react-three/cannon';
import React from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { Vector3 } from 'three';
import { useMovementKeys } from '../../hooks/useMovementKeys';
import { useLockControls } from '../../hooks/useLockControls';
import { FirstPersonCamera } from '../utils/FirstPersonControls';

const SPEED = 5;

export const PlayerVelocity: React.FunctionComponent = () => {

    console.log('render')

    const enableControls = useLockControls();

    const { camera } = useThree();

    const cameraRef = React.useRef(camera)

    const [playerRef, api] = useSphere(() => ({
        type: 'Dynamic',
        mass: 1
    }))

    const { up: w, down: s, right: d, left: a } = useMovementKeys(); // should be done in FPC class

    const velocity = React.useRef([0, 0, 0]);

    React.useEffect(() => {
        api.velocity.subscribe((v) => (velocity.current = v));
    }, [api.velocity]);

    api.position.subscribe((p: any) => {
        const [x, y, z] = p;
        playerRef.current?.position.set(x, y, z)
    });

    const ctrRef = React.useRef(new FirstPersonCamera(cameraRef.current, playerRef.current?.position, playerRef))

    useFrame(() => {

        enableControls && ctrRef.current.update();

        cameraRef.current?.position.copy(playerRef.current?.position as any); // should be done in FPC class
        api.rotation.set(0, 0, 0)

        const direction = new Vector3();
        const frontVector = new Vector3(0, 0, (s ? 1 : 0) - (w ? 1 : 0));
        const sideVector = new Vector3((a ? 1 : 0) - (d ? 1 : 0), 0, 0);

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation);

        api.velocity.set(direction.x, velocity.current[1], direction.z);
        playerRef.current?.position.copy(api.position as any);
    })

    return <mesh ref={playerRef}></mesh>
};