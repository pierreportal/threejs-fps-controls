import React from 'react';
import { Euler } from 'three';

interface INeonLightProps {
    position: [number, number, number]
    length: number
    rotation: Euler
    color: string
}

export const NeonLight: React.FunctionComponent<INeonLightProps> = ({ length, position, rotation, color }) => {
    return <group position={position} rotation={rotation}>
        <mesh >
            <cylinderBufferGeometry args={[.03, .03, length]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
            <pointLight castShadow position={[0, 0, 0]} intensity={0.05} color={color} />
        </mesh>
        <mesh position={[0, length / 2, 0]}>
            <sphereBufferGeometry args={[0.05]} />
            <meshStandardMaterial color={'black'} emissive={'black'} />
        </mesh>
        <mesh position={[0, -length / 2, 0]}>
            <sphereBufferGeometry args={[0.05]} />
            <meshStandardMaterial color={'black'} emissive={'black'} />
        </mesh>
    </group>
}