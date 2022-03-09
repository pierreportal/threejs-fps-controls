import React from 'react';
import { FlyingLightBall } from '../../objects/FlyingLightBall';
import { Spotlight } from '../../objects/Spotlight';


export const Lights: React.FunctionComponent = () => {
    return <>
        <ambientLight color={'cyan'} intensity={0.05} />
        <Spotlight intensity={0.3} position={[-1, 4, -2]} target={[-2, 0, -2]} angle={1} color={'#ffe9ad'} penumbra={1} />
        <FlyingLightBall position={[-2, 0, 3]} color={'cyan'} />
        <FlyingLightBall position={[-1, 0, 4]} color={'orange'} />
        <FlyingLightBall position={[2, 0, 1]} color={'coral'} />
        <FlyingLightBall position={[-1, 0, -5]} color={'blue'} />
    </>
}