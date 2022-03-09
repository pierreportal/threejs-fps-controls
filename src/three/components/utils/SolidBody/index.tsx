import { useBox } from '@react-three/cannon';
import React from 'react';

interface ISolidBodyProps {
    dimensions: [number, number, number]
    children: React.ReactElement
    position: [number, number, number]
}

export const SolidBody: React.FunctionComponent<ISolidBodyProps> = ({ children, dimensions, position }) => {

    const refPos = [...position];
    refPos[1] += dimensions[1] / 2

    const ref = useBox(() => (
        {
            args: dimensions,
            position: refPos as any
        }
    ));

    return React.cloneElement(children, { ref, position, castShadow: true });
}