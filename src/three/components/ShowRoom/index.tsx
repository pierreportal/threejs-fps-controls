import React from 'react';
import SciFiDoor from '../Flat/SciFiDoor';
// import { Painting } from '../Flat/Painting';
import { Box } from '../objects/Box';
import { FlyingLightBall } from '../objects/FlyingLightBall';
import { SolidBody } from '../utils/SolidBody';
import { ArtWork } from './ArtWork';
import Pupitre from './ArtWork/Pupitre';
import SculpTest from './ArtWork/SculpTest';
import { ShowRoomRelativeSpace } from './ShowRoomRelativeSpace';

export const ShowRoom: React.FunctionComponent = () => {

    const pupitres: Array<any> = [
        [6, 0, 6],
        [7, 0, 6],
        [8, 0, 6],
        [9, 0, 6],
    ].map((pos: any) => {
        return <SolidBody dimensions={[1, 1.5, 1]} position={pos}>
            <Pupitre />
        </SolidBody>
    });

    return <group>
        <ShowRoomRelativeSpace>

            <pointLight castShadow position={[4.5, 8, 8.5]} power={0.3} />
            {/* <FlyingLightBall position={[4, 2, 8]} color={'blue'} /> */}

            <ArtWork position={[3, 0, 8.5]} pupitreDiameter={0.5} pupitreHeight={1} />

            <ArtWork position={[10, 0, 5]} pupitreDiameter={2} pupitreHeight={2} />

            <ArtWork position={[13, 0, 13.5]} pupitreDiameter={0.5} pupitreHeight={1.5} />


            <ArtWork position={[11, 0, 10]} pupitreDiameter={1} pupitreHeight={0.5} />


            <ArtWork position={[5, 0, 1]} pupitreDiameter={0.5} pupitreHeight={1} />

            {/* <SciFiDoor onClick={() => false} scale={2} rotation={[0, Math.PI, 0]} position={[8.5, 0, 17]} /> */}






        </ShowRoomRelativeSpace>
    </group>
}