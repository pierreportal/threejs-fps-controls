import React from 'react';
import { Plane } from '../objects/Plane';
import { Lights } from './Lights';
import { Computer } from './Computer';
import Gibson from './Gibson';
import { Painting } from './Painting';
import SciFiDoor from './SciFiDoor';
import Fridge from './Fridge';
import FridgeClosed from './FridgeClosed';
import SeparatorWall from './SeparatorWall';
import { useTemporarySubtitle } from '../../hooks/useTemporarySybtitle';
import Moka from './Moka';
import { PlayerVelocity } from '../PlayerVelocity';
import HeavyDesk from './HeavyDesk';
import { SolidBody } from '../utils/SolidBody';
import { FlatRelativeSpace } from './FlatRelativeSpace';
import { NavigationZone } from '../NavigationZone';
import { useStore } from '../../hooks/useStore';
import { Box } from '../objects/Box';
import { AudioSource } from '../AudioSource';

interface IFlatProps {
    startingPosition: false | any
}

export const Flat: React.FunctionComponent<IFlatProps> = ({ startingPosition }) => {

    const P = startingPosition && Object.values(startingPosition)

    const tmpSubtitle = useTemporarySubtitle()

    const { mainTitle } = useStore();

    return <group position={[0, 0, 0]}>
        <Lights />
        <FlatRelativeSpace>
            <SolidBody dimensions={[2, 1.5, 2]} position={[4, 0, 3]}>
                <HeavyDesk />
            </SolidBody>
            <SolidBody dimensions={[3, 4, 1]} position={[0, 0, 7]}>
                <SeparatorWall scale={1.65} rotation={[0, Math.PI / 2, 0]} />
            </SolidBody>
            <SolidBody dimensions={[3, 4, 1]} position={[8.5, 0, 7]}>
                <SeparatorWall scale={1.65} rotation={[0, -Math.PI / 2, 0]} />
            </SolidBody>
            <Computer position={[5, 2.05, 4.5]} rotation={[0, Math.PI - 50, 0] as any} />
            <Painting dimensions={[.5, .7, .05]} photo={'bjork-photo.png'} position={[11.7, 2, 6]} rotation={[0, Math.PI / 2, 0]} />
            <PlayerVelocity position={P || [6, 0, 6]} />
            <SciFiDoor onClick={
                () => mainTitle === 'Contact' && tmpSubtitle('This door is locked.', 2000)
            } scale={1.5} rotation={[0, Math.PI, 0]} position={[6, 0, 12]} />
            <FridgeClosed position={[0.6, 0, 11.5]} rotation={[0, -Math.PI, 0]} />
            <Fridge position={[0.6, 0, 10.5]} rotation={[0, -Math.PI, 0]} />
            <FridgeClosed position={[0.6, 0, 9.5]} rotation={[0, -Math.PI, 0]} />
            <FridgeClosed position={[0.6, 0, 8.5]} rotation={[0, -Math.PI, 0]} />
            <Plane dimensions={[12, 0, 12]} position={[0, 0, 0]} />
            <Gibson position={[7.8, 0.7, 3]} scale={0.2} rotation={[1.6, -0.25, 4.7]} />
            <Moka position={[5.5, 1.57, 3.5]} scale={0.05} rotation={[0, 500, 0]} />
            {/* <NavigationZone position={[0, 1, 12]} dimensions={[12, 6, 0.1]} route={"Email"} debug /> */}
        </FlatRelativeSpace>
    </group>
}