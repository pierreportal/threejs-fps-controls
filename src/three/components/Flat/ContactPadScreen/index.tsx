import { useBox } from '@react-three/cannon';
import React from 'react';

interface IContactPadScreenProps {
    position: any,
    rotation: any
}
export const ContactPadScreen: React.FunctionComponent<IContactPadScreenProps> = ({ position, rotation }) => {

    console.log('hiu')

    const [ref] = useBox(() => (
        {
            type: "Static",
            position,
            rotation,
            args: [0.5, 0.7, 0.1]
        }
    ));

    return <mesh ref={ref} castShadow receiveShadow position={position} rotation={rotation}>
        <boxGeometry attach="geometry" args={[0.5, 0.7, 0.2]} />
        <meshStandardMaterial
            color={'cyan'}
            emissive={'blue'}
        />
    </mesh>
}