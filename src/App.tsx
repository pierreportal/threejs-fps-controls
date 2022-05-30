import React from 'react';
import { NotificationManager } from './NotificationManager';
import { Routing } from './Routing';
import { useStore } from './three/hooks/useStore';

export const DEBUG = false;

function App() {

  const { enableControls, setMusic } = useStore();

  const music = React.useRef<any>(null);

  React.useEffect(() => {
    music.current = new Audio('/assets/sounds/room.mp3');
    music.current.loop = true;
    music.current.volume = 0.2;
    setMusic(music.current);
  }, [setMusic]);

  if (DEBUG && !enableControls) {
    const lid = document.getElementById('eye-lid-up');
    const lidB = document.getElementById('eye-lid-down');

    const nap = document.getElementById('nap');

    document.getElementsByTagName('canvas')[0]?.classList.add('cleared')

    if (lid && nap && lidB) {
      lid.style.display = 'none';
      nap.style.display = 'none';
      lidB.style.display = 'none';
    }
  }
  return (
    <NotificationManager>
      {/* {!enableControls && <TextPage section={mainTitle} />} */}
      <div id="nap"></div>
      <Routing />
    </NotificationManager>
  );
}

export default App;