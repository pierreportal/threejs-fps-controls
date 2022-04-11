import { DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { NotificationManager } from './NotificationManager';
import { Routing } from './Routing';
import { TextPage } from './TextPages';
import { useStore } from './three/hooks/useStore';

export const DEBUG = false;

function App() {

  const { enableControls, mainTitle } = useStore();
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
      {!enableControls && <TextPage section={mainTitle} />}
      <div id="nap"></div>
      <Routing />
    </NotificationManager>
  );
}

export default App;