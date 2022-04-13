import { Html } from '@react-three/drei';
import React from 'react';
import { Box } from '../objects/Box';
import { FlyingLightBall } from '../objects/FlyingLightBall';
import { NeonLight } from '../objects/NeonLight';

const _OutsideWorld: React.FunctionComponent = () => {
    return <group position={[0, 2, -10]}>

        <mesh position={[-5 + Math.random() * 10, 0, Math.random() * 5 - 10]}>
            <boxGeometry args={[Math.random(), 0.05, 0.1]} />
            <meshBasicMaterial color={"red"} />
        </mesh>

        <mesh position={[-5 + Math.random() * 10, 0.2, Math.random() * 5 - 10]}>
            <boxGeometry args={[Math.random(), 0.05, 0.1]} />
            <meshBasicMaterial color={"red"} />

        </mesh>

        <mesh position={[-5 + Math.random() * 10, 0.4, Math.random() * 5 - 10]}>
            <boxGeometry args={[Math.random(), 0.05, 0.1]} />
            <meshBasicMaterial color={"red"} />

        </mesh>


        <mesh position={[-5 + Math.random() * 10, 0.6, Math.random() * 5 - 10]}>
            <boxGeometry args={[Math.random(), 0.05, 0.1]} />
            <meshBasicMaterial color={"red"} />

        </mesh>


        <mesh position={[-5 + Math.random() * 10, 0.8, Math.random() * 5 - 10]}>
            <boxGeometry args={[Math.random(), 0.05, 0.1]} />
            <meshBasicMaterial color={"red"} />

        </mesh>


        <mesh position={[-5 + Math.random() * 10, 1, Math.random() * 5 - 10]}>
            <boxGeometry args={[Math.random(), 0.05, 0.1]} />
            <meshBasicMaterial color={"red"} />

        </mesh>
    </group>
}

export const OutsideWorld = React.memo(_OutsideWorld);