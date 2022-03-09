import { useBox } from '@react-three/cannon';
import React from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { FirstPersonCamera } from '../utils/FirstPersonControls';
import { useLockControls } from '../../hooks/useLockControls';
import { PLAYER_HEIGHT } from '../../constants';
import { CameraShake } from '@react-three/drei';
import { Box3 } from 'three';
import { intersect } from '../utils/Collisions';

interface IPlayerProps {
    position: any
    objectsRef: any
}

// const cameraShakeArgs = {
//     maxPitch: 0.05,
//     maxRoll: 0.05,
//     maxYaw: 0.05,
//     pitchFrequency: 0.8,
//     rollFrequency: 0.1,
//     yawFrequency: 0.1,
// }


export const Player: React.FunctionComponent<IPlayerProps> = ({ position, objectsRef }) => {

    const { camera } = useThree();

    const cameraRef = React.useRef(camera);

    cameraRef.current.position.set(position[0], PLAYER_HEIGHT, position[2]);

    const enableControl = useLockControls();

    const [playerRef, api] = useBox(() => ({
        type: 'Static',
        mass: 100,
        args: [1, 2, 1],
        position: [position[0], 0, position[2]],
    }));

    const controls = new FirstPersonCamera(cameraRef.current, position, playerRef);
    const meshes = objectsRef.current?.children.map((kid: any) => new Box3(kid));

    const rigB = new Box3(playerRef.current?.position);

    console.log(rigB)
    useFrame(() => {
        const cameraPosition = enableControl && controls.update();
        if (meshes) {
            meshes.forEach((mesh: any) => {
                const c = intersect(rigB, mesh);
                if (c) {
                    console.log(mesh)
                }

            })
        }
        cameraPosition && api.position.set(cameraPosition.x, cameraPosition.y - PLAYER_HEIGHT, cameraPosition.z);
    });

    return <>
        {/* <CameraShake {...cameraShakeArgs} /> */}
        <mesh ref={playerRef}>
            <boxGeometry
                attach="geometry"
                args={[1, 2, 1]}

            />
            <meshStandardMaterial
                attach="material"
                color="none"
                transparent={true}
                opacity={0}
            />
        </mesh>
    </>
};