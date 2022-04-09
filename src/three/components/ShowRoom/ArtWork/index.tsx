import React from 'react';
import { SolidBody } from '../../utils/SolidBody';
import Pupitre from './Pupitre';
import SculpTest from './SculpTest';

interface IArtWork {
    position: [number, number, number]
}

export const ArtWork: React.FunctionComponent<IArtWork> = ({ position }) => {
    const artPos: any = [...position];
    artPos[1] = 2;
    return <>
        <SculpTest scale={1} position={artPos} />
        <SolidBody dimensions={[1, 1.5, 1]} position={position}>
            <Pupitre />
        </SolidBody>
    </>
}