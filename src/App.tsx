import React from 'react';
import { NotificationManager } from './NotificationManager';
import { Routing } from './Routing';
import { useStore } from './three/hooks/useStore';

export const DEBUG = false;

function App() {

	const { enableControls, setMusic, setIsOnMobile } = useStore();

	const music = React.useRef<any>(null);
    
	React.useEffect(() => {
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			setIsOnMobile(true);
		}
	},[setIsOnMobile]);

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
			<span style={{
				position: 'absolute',
				top: '10px',
				color: 'blue',
				zIndex: 9
			}}>Note: This 3D environment is a work in progress prototype for my new personal website. Welcome home.</span>
			{/* {!enableControls && <TextPage section={mainTitle} />} */}
			<div id="nap"></div>
			<Routing />
		</NotificationManager>
	);
}

export default App;
