import React from 'react';
import { useLoader, useThree } from 'react-three-fiber';
import { AudioListener, AudioLoader } from 'three';

function Sound({ url, play }: any) {
    const sound = React.useRef()
    const { camera } = useThree()
    const [listener] = React.useState(() => new AudioListener())
    const buffer = useLoader(AudioLoader, url)


    React.useEffect(() => {
        (sound.current as any).setBuffer(buffer);
        (sound.current as any).setRefDistance(1);
        (sound.current as any).setLoop(true);
        camera.add(listener);
        if (play) {
            (sound.current as any)?.play()
        } else {
            (sound.current as any)?.pause()
        }
        return () => camera.remove(listener) as any;
    }, [play, camera, buffer, listener]);

    return <positionalAudio ref={sound} args={[listener]} />
}

interface IAudioSourceProps {
    children: React.ReactElement
    play: boolean
    path: string
}

export const AudioSource: React.FunctionComponent<IAudioSourceProps> = ({ children, play, path }) => {
    return <mesh position={children.props.position}>
        <Sound url={path} play={play} />
        {children}
    </mesh>
}