import React from 'react';
import { FlyingLightBall } from '../objects/FlyingLightBall';
import { Plane } from '../objects/Plane';
import { HallwayRelativeSpace } from './HallwayRelativeSpace';

export const Hallway: React.FunctionComponent = () => {
    return <group>

        <HallwayRelativeSpace>
            {/* <FlyingLightBall position={[2, 1, 3]} color={'coral'} /> */}
            {/* <FlyingLightBall position={[3, 3, 5]} color={'cyan'} /> */}
            <Plane emissive={'coral'} emissiveIntensity={0.1} dimensions={[4, 0, 13]} position={[0, 0, 1.5]} />
            <Plane emissive={'coral'} emissiveIntensity={0.1} dimensions={[10, 0, 4]} position={[-12, 0, 10.5]} />

        </HallwayRelativeSpace>
    </group>
}