import React from 'react';
import { ArtWork } from './ArtWork';
import { MolecularSynth } from './ArtWork/scupltures/MolecularSynth';
import SculpTest from './ArtWork/scupltures/SculpTest';
import SculpTestB from './ArtWork/scupltures/SculpTestB';
import SculpTestC from './ArtWork/scupltures/SculpTestC';

import { ShowRoomRelativeSpace } from './ShowRoomRelativeSpace';

const _ShowRoom: React.FunctionComponent = () => {

    return <group>
        <ShowRoomRelativeSpace>

            <ArtWork title="cool" onClick={() => true} position={[3, 0, 8.5]} pupitreDiameter={0.5} pupitreHeight={1} >
                <SculpTestC scale={1} />
            </ArtWork>

            <ArtWork title="cool" onClick={() => true} position={[10, 0, 5]} pupitreDiameter={2} pupitreHeight={2} >
                <SculpTestB scale={3} />
            </ArtWork>

            <ArtWork title="cool" onClick={() => true} position={[13, 0, 13.5]} pupitreDiameter={0.5} pupitreHeight={1.5} >
                <SculpTest scale={1} />
            </ArtWork>

            <ArtWork title="cool" onClick={() => true} position={[11, 0, 10]} pupitreDiameter={1} pupitreHeight={0.5} >
                <SculpTest scale={1} />
            </ArtWork>

            <ArtWork title="cool" onClick={() => true} position={[5, 0, 1]} pupitreDiameter={0.5} pupitreHeight={1} >
                <SculpTest scale={1} />
            </ArtWork>

            <ArtWork title="cool" onClick={() => true} position={[6, 0, 4]} pupitreDiameter={0.5} pupitreHeight={1} >
                <MolecularSynth scale={0.5} />
            </ArtWork>

        </ShowRoomRelativeSpace>
    </group>
}

export const ShowRoom = React.memo(_ShowRoom);