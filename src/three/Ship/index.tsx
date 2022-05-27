import { Debug } from '@react-three/cannon';
import { Html, Sky, useProgress, OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Flat } from '../components/Flat';
import { Hallway } from '../components/Hallway';
import { NeonEffect } from '../components/objects/Neon';
import { ShowRoom } from '../components/ShowRoom';
import { Universe } from '../components/Universe';
import { useLockControls } from '../hooks/useLockControls';
import { getUserPositionFromRoute } from '../hooks/usePlayerRouting';
import { useStore } from '../hooks/useStore';
import { DEBUG } from '../../App'
import { Instructions } from './styles';
import { OutsideWorld } from '../components/OutsideWorld';
import { AudioSource } from '../components/AudioSource';
interface IShip {
    location: string;
}
export const Ship: React.FunctionComponent<IShip> = ({ location }) => {

    const { progress } = useProgress()
    const { enableControls, navigateByPlayerMoves } = useStore();
    const { controlOn } = useLockControls()
    const pointer = <div id="pointer"></div>;

    const startingPosition = !navigateByPlayerMoves && getUserPositionFromRoute(location);

    const complex = <>
        <AudioSource path="/assets/sounds/drone1.mp3" play={!!enableControls} >
            <Flat startingPosition={startingPosition} />
        </AudioSource>
        <ShowRoom />
        <Hallway />
    </>;

    return <>
        {
            progress === 100 &&
            (
                enableControls
                    ? <>
                        {pointer}
                        <Instructions>
                            [w][a][s][d] to move
                        </Instructions>
                    </>
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
                            {complex}
                        </Debug>
                    </>
                ) : (
                    <>
                        <NeonEffect />
                        {complex}
                    </>
                )}
            </Suspense>
        </Universe>
    </>
}