import React from 'react';

export const useMovementKeys = () => {
    const [direction, setDirection] = React.useState({
        up: false,
        left: false,
        right: false,
        down: false
    });

    React.useEffect(() => {
        document.addEventListener('keydown', move);
        document.addEventListener('keyup', stop);

        return () => {
            document.removeEventListener('keydown', move);
            document.removeEventListener('keyup', stop);

        };
    });

    const move = (e: KeyboardEvent) => {
        const { key } = e;
        switch (key) {
            case 'w':
                setDirection({ ...direction, up: true });
                break;
            case 'a':
                setDirection({ ...direction, left: true });
                break;
            case 's':
                setDirection({ ...direction, down: true });
                break;
            case 'd':
                setDirection({ ...direction, right: true });
                break;
        }
    }

    const stop = (e: KeyboardEvent) => {
        const { key } = e;
        switch (key) {
            case 'w':
                setDirection({ ...direction, up: false });
                break;
            case 'a':
                setDirection({ ...direction, left: false });
                break;
            case 's':
                setDirection({ ...direction, down: false });
                break;
            case 'd':
                setDirection({ ...direction, right: false });
                break;
        }
    }


    return direction;
}