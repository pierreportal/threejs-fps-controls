import React, { Suspense } from 'react';
import { Universe } from './three/components/Universe';
import { Debug } from '@react-three/cannon';
import { PlayerVelocity } from './three/components/PlayerVelocity';
import { NeonEffect } from './three/components/objects/Neon';
import { Html, useProgress } from '@react-three/drei';
import { Spotlight } from './three/components/objects/Spotlight';
import { Flat } from './three/components/Flat';
import { NotificationManager } from './NotificationManager';
import { useLockControls } from './three/hooks/useLockControls';
import { useStore } from './three/hooks/useStore';
import { ShowRoom } from './three/components/ShowRoom';

function App() {
  const { progress } = useProgress()
  const { enableControls } = useStore();
  const { controlOn } = useLockControls()
  const pointer = <div id="pointer"></div>;

  return (
    <NotificationManager>

      {
        progress === 100 &&
        (
          enableControls
            ? pointer
            : <button id="play-button" onClick={controlOn}>PLAY</button>
        )
      }

      <Universe>
        <Suspense fallback={<Html center style={{ color: 'white' }}>{progress.toFixed(0)}%</Html>}>
          <NeonEffect />
          <Flat />

          {/* <Debug color="white"> */}
          <ShowRoom />
          {/* </Debug> */}
        </Suspense>
      </Universe>
    </NotificationManager>
  );
}

export default App;