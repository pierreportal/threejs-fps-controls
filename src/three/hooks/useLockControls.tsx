import React from 'react';
import { useStore } from './useStore';


export enum UserInputMode {
    Mail = 'Mail'
}


export const useLockControls = () => {
    const { setEnableControls, setUserInputMode, setFreePointerEyesOpen, freePointerEyesOpen } = useStore();

    const controlOn = (event: any) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const midScreen = [innerWidth / 2, innerHeight / 2];
        const diff = [midScreen[0] - clientX, midScreen[1] - clientY];
        document.getElementsByTagName('canvas')[0].requestPointerLock();
        setEnableControls(diff);
    };

    const keyCheck = (event: KeyboardEvent, key: string, callback: Function) => {
        if (event.key === key) {
            setFreePointerEyesOpen(false);
            setUserInputMode(null);
            callback(event);
        }
    };

    React.useEffect(() => {
        if (freePointerEyesOpen) {
            // document.addEventListener('keydown', (event: KeyboardEvent) => keyCheck(event, 's', controlOn))
        }
    }, [freePointerEyesOpen])


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