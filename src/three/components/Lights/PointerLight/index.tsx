import React from 'react';
import { useFrame } from 'react-three-fiber';

export const PointerLight: React.FunctionComponent = () => {

    const ref = React.useRef();
    const meshRef = React.useRef();

    let z = 0;

    const controlZaxis = (event: any) => {
        const { key } = event
        if (key === 'n') {
            z += 0.1
        } else if (key === 'm') {
            z -= 0.1
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', controlZaxis);
        return () => document.removeEventListener('keydown', controlZaxis);
    });

    useFrame((state: any) => {
        const { x, y } = state.mouse as any
        (ref.current as any).position.set(x, y, z);
        (meshRef.current as any).position.set(x, y, z);
    });


    return (
        <>
            <pointLight
                ref={ref}
                castShadow
                intensity={0.4}
                position={[10, 10, 10]}
                shadow-mapSize-height={144 * 40}
                shadow-mapSize-width={144 * 40}
            />
            <mesh ref={meshRef}>
                <boxGeometry args={[0.1, .1, .1]} />
                <meshStandardMaterial color="coral" />
            </mesh>
        </>

    )
}