import React from 'react';

interface IOwnProps {
    position: [x: number, y: number, z: number]
    target: [x: number, y: number, z: number]
    penumbra?: number
    angle?: number
    color?: string
    intensity?: number
}

export const Spotlight: React.FunctionComponent<IOwnProps> = ({
    position,
    target,
    angle = 1,
    penumbra = 1,
    color = 'white',
    intensity = 1
}) => {

    const targetRef = React.useRef()

    return <>
        <mesh position={position}>
            <sphereBufferGeometry args={[.05]} />
            <meshStandardMaterial color={color} emissive={color} />
        </mesh>
        <pointLight intensity={0.1} castShadow position={position} color={color} />
        <spotLight intensity={intensity} castShadow position={position} target={targetRef.current} angle={angle} penumbra={penumbra} color={color} />
        <mesh ref={targetRef} position={target}></mesh>
    </>
}