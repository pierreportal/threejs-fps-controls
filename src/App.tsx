import React, { Suspense } from 'react';
import { Universe } from './three/components/Universe';
import { Debug } from '@react-three/cannon';
import { NeonEffect } from './three/components/objects/Neon';
import { Html, useProgress } from '@react-three/drei';
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

      <div id="nap"></div>
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
          <Flat />
          {/* <Debug color="red"> */}
          <ShowRoom />
          {/* </Debug> */}
        </Suspense>
      </Universe>
    </NotificationManager>
  );
}

export default App;