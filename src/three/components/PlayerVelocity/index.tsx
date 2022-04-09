import { Triplet, useBox } from '@react-three/cannon';
import React from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { usePlayerRouting } from '../../hooks/usePlayerRouting';
import { useStore } from '../../hooks/useStore';
import { FirstPersonCamera } from '../utils/FirstPersonControls';

const PLAYER_HEIGHT = 1.8;

interface IOwnProps {
    position: Triplet;
}

const ctr = new FirstPersonCamera();

export const PlayerVelocity: React.FunctionComponent<IOwnProps> = ({ position }) => {

    const { enableControls } = useStore();

    const { camera } = useThree();

    const cameraRef = React.useRef(camera);

    const [playerRef, api] = useBox(() => (
        {
            type: 'Dynamic',
            mass: 100,
            position: [position[0], position[1] + 1, position[2]],
            args: [1, 2, 1]
        }
    ));

    usePlayerRouting(playerRef.current?.position)

    api.position.subscribe((p: Triplet) => {
        playerRef.current?.position.set(...p)
    });

    ctr.camera_ = cameraRef.current;
    ctr.playerApi_ = api

    useFrame(() => {
        if (enableControls) {
            ctr.update(enableControls);
        }
        cameraRef.current?.position.set(
            playerRef.current?.position.x as number,
            cameraRef.current?.position.y || PLAYER_HEIGHT - 0.3 as number,
            playerRef.current?.position.z as number
        );
        api.rotation.set(0, 0, 0);
    });

    return <mesh ref={playerRef}></mesh>
};