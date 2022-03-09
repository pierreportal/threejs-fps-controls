import React from 'react';
import { useStore } from './useStore';

export const useLockControls = () => {
    const { setEnableControls } = useStore();

    const controlOn = (event: any) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const midScreen = [innerWidth / 2, innerHeight / 2];
        const diff = [midScreen[0] - clientX, midScreen[1] - clientY];
        document.getElementsByTagName('canvas')[0].requestPointerLock();
        setEnableControls(diff);
    };

    const toggleControl = () => {
        if (!document.pointerLockElement) {
            setEnableControls(false)
        }
    }

    React.useEffect(() => {
        document.addEventListener('pointerlockchange', toggleControl);
        return () => {
            document.removeEventListener('pointerlockchange', toggleControl);
        };
    });

    return { controlOn };
};