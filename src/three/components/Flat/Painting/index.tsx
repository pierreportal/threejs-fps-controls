import React from 'react';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

interface IPaintingProps {
    dimensions: any,
    photo: string,
    position: any,
    rotation: any
}

export const Painting: React.FunctionComponent<IPaintingProps> = ({ dimensions, position, rotation, photo }) => {
    const textureScreen = useLoader(TextureLoader, `/assets/images/${photo}`)
    const FRAME_SIZE = 0.03;
    return (
        <group position={position} rotation={rotation}>

            <mesh castShadow receiveShadow position={[0, dimensions[1] / 2 + FRAME_SIZE, 0]}>
                <boxGeometry attach="geometry" args={[dimensions[0] + FRAME_SIZE * 2, FRAME_SIZE, dimensions[2]]}
                />
                <meshStandardMaterial
                    color={'black'}
                    emissive={'black'}
                />
            </mesh>

            <mesh castShadow receiveShadow position={[0, -dimensions[1] / 2 - FRAME_SIZE, 0]}>
                <boxGeometry attach="geometry" args={[dimensions[0] + FRAME_SIZE * 2, FRAME_SIZE, dimensions[2]]}
                />
                <meshStandardMaterial
                    color={'black'}
                    emissive={'black'}
                />
            </mesh>

            <mesh castShadow receiveShadow position={[dimensions[0] / 2 + FRAME_SIZE, 0, 0]}>
                <boxGeometry attach="geometry" args={[FRAME_SIZE, dimensions[1] + FRAME_SIZE * 3, dimensions[2]]}
                />
                <meshStandardMaterial
                    color={'black'}
                    emissive={'black'}
                />
            </mesh>


            <mesh castShadow receiveShadow position={[-dimensions[0] / 2 - FRAME_SIZE, 0, 0]}>
                <boxGeometry attach="geometry" args={[FRAME_SIZE, dimensions[1] + FRAME_SIZE * 3, dimensions[2]]}
                />
                <meshStandardMaterial
                    color={'black'}
                    emissive={'black'}
                />
            </mesh>

            <mesh >
                <boxGeometry
                    attach="geometry"
                    args={dimensions as any}
                />
                <meshStandardMaterial
                    color={'white'}
                    displacementScale={0}
                    emissive={'black'}
                    map={textureScreen}
                />
            </mesh>
        </group>
    )
}