import { usePlane } from '@react-three/cannon';
import React from 'react';

interface IOwnProps {
    position: [number, number, number],
    dimensions: [number, number, number]
}
export const Plane: React.FunctionComponent<IOwnProps> = ({ position }) => {

    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
    return (
        <mesh position={position} receiveShadow castShadow ref={ref}>
            <planeBufferGeometry attach="geometry" args={[12, 12]} />
            <meshPhongMaterial
                color={'grey'}
            />
        </mesh>
    )
}