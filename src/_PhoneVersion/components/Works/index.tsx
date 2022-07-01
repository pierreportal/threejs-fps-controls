import React from 'react';


export const Works:React.FunctionComponent = () => {
	const [t, setT] = React.useState<any>('jbk');

	const testMoving = (event:any) => {
			setT('moving');
	}
	
	{/* React.useEffect(():void => { */}
	{/* 	window.addEventListener('touchstart', () => { */}
	{/* 	(DeviceOrientationEvent as any).requestPermission().then((x:any) => { */}
	{/* 			setT(x); */}
	{/* 	}).catch((e:any) => setT(e)); */}
	{/* 	}) */}
	{/* }, []) */}

	const handleClick = () => {


		if (typeof (DeviceMotionEvent as any).requestPermission === 'function') 
				{
							(DeviceMotionEvent as any).requestPermission()
						.then((permissionState: any) => {
							setT(permissionState);
											if (permissionState === 'granted') 
												{
																	// DeviceMotionEvent.requestPermission() has been granted
																}
																        })
															                .catch(console.error);
																                       }
	}
	return <button onClick={handleClick}>Works {t}</button>;
}
