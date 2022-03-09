import { useBox, usePlane } from '@react-three/cannon';
import React from 'react';
import { useLoader } from 'react-three-fiber';
import { Box3, RepeatWrapping, TextureLoader } from 'three';
import { useTexturizer } from '../../../hooks/useTexturizer';

interface IBoxProps {
    floating?: boolean;
    mass?: number;
    position: any;
    dimensions: any;
}

export const Box: React.FunctionComponent<IBoxProps> = ({ floating, mass = 1, position, dimensions }) => {

    const texture = useTexturizer('test3')

    const [ref, api] = useBox(() => (
        {
            type: floating ? "Static" : "Dynamic",
            mass,
            position: position,//.map((x: number, i: number) => x + dimensions[i] / 2),
            args: dimensions
        }
    ));





    const box = ref.current && new Box3().setFromObject(ref.current)
    console.log(box);


    return <mesh ref={ref} receiveShadow castShadow >
        <boxGeometry
            attach="geometry"
            args={[...dimensions] as any}
        />
        <meshStandardMaterial
            displacementScale={0.25}
            {...texture}
        />

    </mesh>
}