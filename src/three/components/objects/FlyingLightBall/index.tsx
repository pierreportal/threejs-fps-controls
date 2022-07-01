import { useSphere } from '@react-three/cannon';
import React from 'react';
import { useFrame } from 'react-three-fiber';

interface IOwnProps {
    position: [x: number, y: number, z: number]
    color: string;
    still?: boolean;
    intensity?: number
}

export const FlyingLightBall: React.FunctionComponent<IOwnProps> = ({ position, color, still, intensity }) => {


    const ref = React.useRef();

    const [refC, api] = useSphere(() => ({
        type: still ? 'Static' : 'Dynamic',
        mass: 1,
        position,
        args: [.3],
    }))

    let [x, y, z] = [0, 0, 0];

    const FREQ = .01


    useFrame(() => {


        y += Math.random() * FREQ - FREQ / 2;
        x += Math.random() * FREQ - FREQ / 2;
        z += Math.random() * FREQ - FREQ / 2;


        if (!still) {
            api.velocity.set(x, y, z);
        }
    });

    return <mesh

        // onPointerEnter={() => y = .5}
        ref={refC} position={position}>
        <sphereBufferGeometry args={[.03]} />
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={1} />
        <pointLight castShadow color={color} intensity={intensity || 0.4} distance={6} rotation={[Math.PI / 2, 0, 0]} />
    </mesh>
}
