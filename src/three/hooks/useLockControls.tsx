import React from 'react';

export const useLockControls = () => {
    const [enableControl, setEnableControl] = React.useState<boolean>(false);

    const controlOn = () => {
        document.getElementsByTagName('canvas')[0].requestPointerLock();
        setEnableControl(true);
    };

    React.useEffect(() => {
        document.getElementsByTagName('canvas')[0].addEventListener('click', controlOn);
        return () => {
            document.getElementsByTagName('canvas')[0].removeEventListener('click', controlOn);
        };
    }, []);

    return enableControl;
};