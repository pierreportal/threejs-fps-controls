import React, { Suspense } from 'react';
import { Box } from './three/components/objects/Box';
import { Player } from './three/components/Player';
import { Universe } from './three/components/Universe';
import { Plane } from './three/components/objects/Plane';
import { Debug } from '@react-three/cannon';
import { PlayerVelocity } from './three/components/PlayerVelocity';


function App() {

  const objectsRef = React.useRef();

  return (
    <Suspense fallback={null}>
      <Universe>
        <Debug color="black" scale={1.1}>
          {/* children */}
          <group ref={objectsRef}>
            <Box position={[3, 0, -2]} dimensions={[3, 1, 3]} mass={99} floating />
            <Box position={[0, 2, 0]} dimensions={[1, 1, 1]} mass={99} floating />
            <Box position={[0, 1, 0]} dimensions={[4, 1, 1]} mass={99} floating />
          </group>
          {/* <Player position={[0, 2, 10]} objectsRef={objectsRef} /> */}
          <PlayerVelocity />
          <Plane />
        </Debug>
      </Universe>
    </Suspense>
  );
}

export default App;
