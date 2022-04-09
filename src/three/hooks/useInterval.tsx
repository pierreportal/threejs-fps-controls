
import React from 'react';

export function useInterval(callback: any, delay: number) {
    const savedCallback = React.useRef();

    // Remember the latest callback.
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
        let id = setInterval(() => {
            (savedCallback as any).current();
        }, delay);

        return () => clearInterval(id);

    }, [delay]);
}