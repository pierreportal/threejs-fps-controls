import React from 'react';
import { useLoader, useThree } from 'react-three-fiber';
import { AudioListener, AudioLoader } from 'three';

function Sound({ url, play }: any) {
    const sound = React.useRef()
    const { camera } = useThree()
    const [listener] = React.useState(() => new AudioListener())
    const buffer = useLoader(AudioLoader, url)

    if (play) {
        document.addEventListener('click', () => (sound.current as any).play())
    } else {
        document.addEventListener('click', () => (sound.current as any).pause())
    }

    React.useEffect(() => {
        (sound.current as any).setBuffer(buffer);
        (sound.current as any).setRefDistance(1);
        (sound.current as any).setLoop(true);
        camera.add(listener);
        return () => camera.remove(listener) as any;
    }, [])

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