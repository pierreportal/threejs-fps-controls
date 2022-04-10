import React from 'react';
import { useLoader, useThree } from 'react-three-fiber';
import { AudioListener, AudioLoader } from 'three';


export const useSoundEffect = (url: string, loop: boolean = false) => {

    const sound = React.useRef()
    const { camera } = useThree()
    const [listener] = React.useState(() => new AudioListener())
    const buffer = useLoader(AudioLoader, url)

    React.useEffect(() => {
        (sound.current as any).setBuffer(buffer);
        (sound.current as any).setRefDistance(1);
        (sound.current as any).setLoop(loop);
        camera.add(listener);
        return () => camera.remove(listener) as any;
    }, [])

    const on = () => (sound.current as any).play();
    const off = () => {
        (sound.current as any).pause();
        (sound.current as any)._progress = 0;
    };

    return {
        soundObject: <positionalAudio ref={sound} args={[listener]} />,
        soundOn: on,
        soundOff: off
    }
}