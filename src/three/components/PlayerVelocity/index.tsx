import { Triplet, useBox } from '@react-three/cannon';
import React from 'react';
import { useFrame, useThree, useLoader } from 'react-three-fiber';
import { usePlayerRouting } from '../../hooks/usePlayerRouting';
import { useStore } from '../../hooks/useStore';
import { FirstPersonCamera } from '../utils/FirstPersonControls';
import { AudioListener, AudioLoader } from 'three';

const PLAYER_HEIGHT = 1.8;

interface IOwnProps {
    position: Triplet;
}

const ctr = new FirstPersonCamera();

export const PlayerVelocity: React.FunctionComponent<IOwnProps> = ({ position }) => {

    const { enableControls } = useStore();

    const { camera } = useThree();

    const cameraRef = React.useRef(camera);
    const sound = React.useRef()

    const [listener] = React.useState(() => new AudioListener())
    const buffer = useLoader(AudioLoader, "/assets/sounds/stepTest.ogg")

    const [playerRef, api] = useBox(() => (
        {
            type: 'Dynamic',
            mass: 100,
            position: [position[0], position[1], position[2]],
            args: [1, 2, 1]
        }
    ));


    React.useEffect(() => {
        (sound.current as any).setBuffer(buffer);
        (sound.current as any).setRefDistance(0.1);
        (sound.current as any).setLoop(true);
        camera.add(listener);
        return () => {
            camera.remove(listener) as any;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    ctr.soundEffect.walk = sound.current;

    usePlayerRouting(playerRef.current?.position);

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
        // if (!enableControls) {
        //     cameraRef.current?.rotation.set(
        //         -Math.PI / 2 - 50,
        //         0,
        //         0
        //     );
        // }
        api.rotation.set(0, 0, 0);
        // api.applyForce([0, 0, 0], [1, 1, 1])
    });

    return <mesh ref={playerRef}>
        <positionalAudio ref={sound} args={[listener]} />
    </mesh>
};