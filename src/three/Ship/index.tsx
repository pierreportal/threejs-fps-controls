import { Debug } from '@react-three/cannon';
import { Html, Sky, useProgress, OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';
// import { OrbitControls } from 'three-stdlib';
import { Flat } from '../components/Flat';
import { Hallway } from '../components/Hallway';
import { NeonEffect } from '../components/objects/Neon';
import { ShowRoom } from '../components/ShowRoom';
import { Universe } from '../components/Universe';
import { useLockControls } from '../hooks/useLockControls';
import { getUserPositionFromRoute } from '../hooks/usePlayerRouting';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useStore } from '../hooks/useStore';

import { DEBUG } from '../../App'
import { OutsideWorld } from '../components/OutsideWorld';
interface IShip {
    location: string;
}
export const Ship: React.FunctionComponent<IShip> = ({ location }) => {

    const { progress } = useProgress()
    const { enableControls, navigateByPlayerMoves } = useStore();
    const { controlOn } = useLockControls()
    const pointer = <div id="pointer"></div>;

    const startingPosition = !navigateByPlayerMoves && getUserPositionFromRoute(location);



    return <>
        {
            progress === 100 &&
            (
                enableControls
                    ? pointer
                    : !DEBUG && <>
                        <button id="play-button" onClick={controlOn}>Come in</button>
                    </>
            )
        }
        <Universe>
            <Suspense fallback={<Html center style={{ color: 'white' }}>{progress.toFixed(0)}%</Html>}>
                <OutsideWorld />

                {DEBUG ? (
                    <>
                        <Sky />
                        <OrbitControls />
                        <Debug color="magenta">
                            <Flat startingPosition={startingPosition} />
                            <ShowRoom />
                            <Hallway />
                        </Debug>
                    </>
                ) : (
                    <>
                        <NeonEffect />
                        <Flat startingPosition={startingPosition} />
                        <ShowRoom />
                        <Hallway />
                    </>
                )}

            </Suspense>
        </Universe>
    </>
}