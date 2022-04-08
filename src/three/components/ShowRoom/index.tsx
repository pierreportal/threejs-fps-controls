import React from 'react';
import { Box } from '../objects/Box';
import { FlyingLightBall } from '../objects/FlyingLightBall';
import { Plane } from '../objects/Plane';
import { SolidBody } from '../utils/SolidBody';
import { ShowRoomRelativeSpace } from './ShowRoomRelativeSpace';

export const ShowRoom: React.FunctionComponent = () => {
    return <group>
        <ShowRoomRelativeSpace>
            {/* <FlyingLightBall position={[4, 2, 4]} color={'cyan'} /> */}
            <SolidBody dimensions={[1, 1, 1]} position={[4, 0, 4]}>
                <Box position={[4, 0, 4]} dimensions={[1, 1, 1]} />
            </SolidBody>
            <Plane dimensions={[8, 0, 8]} position={[0, 0, 0]} color={'white'} />
        </ShowRoomRelativeSpace>
    </group>
}