import { usePlane } from '@react-three/cannon';
import React from 'react';

interface IOwnProps {
    position: [number, number, number],
    dimensions: [number, number, number],
    color?: string
    emissive?: string,
    emissiveIntensity?: number
}
export const Plane: React.FunctionComponent<IOwnProps> = ({ position, dimensions, color, emissive, emissiveIntensity }) => {

    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position
    }))
    const [w, , l] = dimensions.map(x => x + 2);
    return (
        <mesh position={position} receiveShadow castShadow ref={ref}>
            <planeBufferGeometry attach="geometry" args={[w, l]} />
            <meshStandardMaterial
                color={color || 'grey'}
                emissive={emissive || 'black'}
                emissiveIntensity={emissiveIntensity || 1}
            />
        </mesh>
    )
}