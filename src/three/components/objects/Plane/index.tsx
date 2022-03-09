import { usePlane } from '@react-three/cannon';
import React from 'react';
import { useLoader } from 'react-three-fiber';
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';
import { useTexturizer } from '../../../hooks/useTexturizer';



export const Plane = () => {

    const texture = useTexturizer('test2')


    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
    return (
        <mesh receiveShadow castShadow ref={ref}>
            {/* <planeGeometry args={[100, 100]} /> */}
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial
            // {...texture}


            />
        </mesh>
    )
}