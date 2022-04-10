import { Debug } from '@react-three/cannon';
import { Html, useProgress } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Flat } from '../components/Flat';
import { NeonEffect } from '../components/objects/Neon';
import { ShowRoom } from '../components/ShowRoom';
import { Universe } from '../components/Universe';
import { useLockControls } from '../hooks/useLockControls';
import { getUserPositionFromRoute } from '../hooks/usePlayerRouting';
import { useStore } from '../hooks/useStore';

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
                    : <>
                        <button id="play-button" onClick={controlOn}>Come in</button>
                    </>
            )
        }
        <Universe>
            <Suspense fallback={<Html center style={{ color: 'white' }}>{progress.toFixed(0)}%</Html>}>
                <NeonEffect />
                <Flat startingPosition={startingPosition} />
                {/* <Debug color="red"> */}
                <ShowRoom />
                {/* </Debug> */}
            </Suspense>
        </Universe>
    </>
}