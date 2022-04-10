import { Html } from '@react-three/drei';
import React from 'react';
import { useInterval } from '../../../hooks/useInterval';
import { useStore } from '../../../hooks/useStore';
import { FlyingLightBall } from '../../objects/FlyingLightBall';
import { SolidBody } from '../../utils/SolidBody';
import Pupitre from './Pupitre';
import SculpTest from './scupltures/SculpTest';

interface IArtWork {
    children: React.ReactElement
    position: [number, number, number]
    pupitreDiameter: number
    pupitreHeight: number
}

export const ArtWork: React.FunctionComponent<IArtWork> = ({ position, pupitreDiameter, pupitreHeight, children }) => {
    const artPos: any = [...position];
    artPos[1] = pupitreHeight;
    const [r, setR] = React.useState(0);

    const { mainTitle, enableControls } = useStore();

    useInterval(() => {
        setR(() => r + 0.001)
    }, 10);

    return <>
        {mainTitle === 'Portfolio' && enableControls && <Html position={[
            position[0],
            pupitreHeight,
            position[2]
        ]}
            as="div"
            wrapperClass={'artwork-label'}
        >
            <p>Hello</p>
        </Html>}

        {React.cloneElement(children, {
            position: [
                position[0],
                pupitreHeight,
                position[2]
            ],
            rotation: [0, r, 0]
        })}

        <SolidBody dimensions={[pupitreDiameter, pupitreHeight + 2, pupitreDiameter]} position={position}>
            <mesh position={position} castShadow receiveShadow>

                {/* <FlyingLightBall intensity={0.2} position={[0, pupitreHeight / 2, 0]} color={'coral'} still /> */}
                {/* <rectAreaLight color={'coral'} position={[pupitreDiameter / 2, 0, 0]} intensity={0.1} width={pupitreDiameter} rotation={[0, Math.PI / 2, 0]} /> */}
                <cylinderBufferGeometry attach="geometry" args={[pupitreDiameter, pupitreDiameter, pupitreHeight, 100]} />
                <meshStandardMaterial attach="material" color="salmon" emissive="white" emissiveIntensity={0.1} />
            </mesh>
        </SolidBody>
    </>
}