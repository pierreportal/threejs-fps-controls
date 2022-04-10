import React from 'react';
import SciFiDoor from '../Flat/SciFiDoor';
// import { Painting } from '../Flat/Painting';
import { Box } from '../objects/Box';
import { FlyingLightBall } from '../objects/FlyingLightBall';
import { SolidBody } from '../utils/SolidBody';
import { ArtWork } from './ArtWork';
import Pupitre from './ArtWork/Pupitre';
import SculpTest from './ArtWork/scupltures/SculpTest';
import SculpTestB from './ArtWork/scupltures/SculpTestB';
import SculpTestC from './ArtWork/scupltures/SculpTestC';

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

    const SHOW_ROOM_INTENSITY = 0.06;

    return <group>
        <ShowRoomRelativeSpace>

            {/* <pointLight castShadow position={[4.5, 8, 8.5]} power={0.3} /> */}
            {/* 
            <rectAreaLight color={'white'} position={[0.01, 5, 8.5]} intensity={SHOW_ROOM_INTENSITY} width={17} height={10} rotation={[0, Math.PI / 2, 0]} />
            <rectAreaLight color={'white'} position={[16.99, 5, 8.5]} intensity={SHOW_ROOM_INTENSITY} width={17} height={10} rotation={[0, -Math.PI / 2, 0]} />
            <rectAreaLight color={'white'} position={[8.5, 5, 0.01]} intensity={SHOW_ROOM_INTENSITY} width={17} height={10} rotation={[0, 0, 0]} />
            <rectAreaLight color={'white'} position={[8.5, 5, 16.99]} intensity={SHOW_ROOM_INTENSITY} width={17} height={10} rotation={[0, Math.PI, 0]} />
            <rectAreaLight color={'white'} position={[8.5, 9.99, 8.5]} intensity={SHOW_ROOM_INTENSITY} width={17} height={17} rotation={[Math.PI / 2, 0, 0]} />
            <rectAreaLight color={'white'} position={[8.5, 0.01, 8.5]} intensity={SHOW_ROOM_INTENSITY} width={17} height={17} rotation={[-Math.PI / 2, 0, 0]} />
 */}




            <ArtWork position={[3, 0, 8.5]} pupitreDiameter={0.5} pupitreHeight={1} >
                <SculpTestC scale={1} />
            </ArtWork>

            <ArtWork position={[10, 0, 5]} pupitreDiameter={2} pupitreHeight={2} >
                <SculpTestB scale={3} />
            </ArtWork>

            <ArtWork position={[13, 0, 13.5]} pupitreDiameter={0.5} pupitreHeight={1.5} >
                <SculpTest scale={1} />
            </ArtWork>


            <ArtWork position={[11, 0, 10]} pupitreDiameter={1} pupitreHeight={0.5} >
                <SculpTest scale={1} />
            </ArtWork>


            <ArtWork position={[5, 0, 1]} pupitreDiameter={0.5} pupitreHeight={1} >
                <SculpTest scale={1} />
            </ArtWork>

            {/* <SciFiDoor onClick={() => false} scale={2} rotation={[0, Math.PI, 0]} position={[8.5, 0, 17]} /> */}






        </ShowRoomRelativeSpace>
    </group>
}