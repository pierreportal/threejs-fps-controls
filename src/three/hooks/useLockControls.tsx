import React from 'react';
import { useStore } from './useStore';


export enum UserInputMode {
    Mail = 'Mail',
    CLI = 'CLI',
}


export const useLockControls = () => {
    const { setEnableControls, setUserInputMode, setFreePointerEyesOpen, freePointerEyesOpen, music } = useStore();

    const controlOn = (event: any) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const midScreen = [innerWidth / 2, innerHeight / 2];
        const diff = [midScreen[0] - clientX, midScreen[1] - clientY];
        document.getElementsByTagName('canvas')[0].requestPointerLock();
        setEnableControls(diff);
        (music as any)?.play();
    };

    const keyCheck = (event: KeyboardEvent) => {
        if (event.key === 'm' && music) {
            (music as any).volume = (music as any)?.volume === 0 ? 0.2 : 0;
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', (event: any) => keyCheck(event));
    }, [music])


    const toggleControl = () => {
        const awake = document.pointerLockElement;
        if (awake) {
            document.getElementsByTagName('canvas')[0].classList.add('cleared')
            document.getElementById('nap')?.classList.add('faded');
            document.getElementById('eye-lid-up')?.classList.remove('closed');
            document.getElementById('eye-lid-down')?.classList.remove('closed');
        } else if (!freePointerEyesOpen) {
            setEnableControls(false)
            document.getElementsByTagName('canvas')[0].classList.remove('cleared')
            document.getElementById('nap')?.classList.remove('faded');
            document.getElementById('eye-lid-up')?.classList.add('closed');
            document.getElementById('eye-lid-down')?.classList.add('closed');
        }
    };

    React.useEffect(() => {
        document.addEventListener('pointerlockchange', toggleControl);
        return () => {
            document.removeEventListener('pointerlockchange', toggleControl);
        };
    });

    return { controlOn };
};