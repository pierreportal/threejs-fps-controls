import React from 'react';
import { SolidBody } from '../../utils/SolidBody';
import Pupitre from './Pupitre';
import SculpTest from './SculpTest';

interface IArtWork {
    position: [number, number, number]
    pupitreDiameter: number
    pupitreHeight: number
}

export const ArtWork: React.FunctionComponent<IArtWork> = ({ position, pupitreDiameter, pupitreHeight }) => {
    const artPos: any = [...position];
    artPos[1] = pupitreHeight;
    return <>
        <SculpTest scale={1} position={artPos} />

        <SolidBody dimensions={[pupitreDiameter, pupitreHeight + 2, pupitreDiameter]} position={position}>
            <mesh position={position} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[pupitreDiameter, pupitreDiameter, pupitreHeight, 100]} />
                <meshStandardMaterial attach="material" color="white" emissive="black" />
            </mesh>
        </SolidBody>
    </>
}