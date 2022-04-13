import React from 'react';
import { Plane } from '../objects/Plane';
import { HallwayRelativeSpace } from './HallwayRelativeSpace';

const _Hallway: React.FunctionComponent = () => {
    return <group>
        <HallwayRelativeSpace>
            <Plane emissive={'coral'} emissiveIntensity={0.1} dimensions={[4, 0, 13]} position={[0, 0, 1.5]} />
            <Plane emissive={'coral'} emissiveIntensity={0.1} dimensions={[10, 0, 4]} position={[-12, 0, 10.5]} />
        </HallwayRelativeSpace>
    </group>
}

export const Hallway = React.memo(_Hallway);