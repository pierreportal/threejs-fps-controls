import React from 'react';
import { useInterval } from '../../../hooks/useInterval';
import { Selectable } from '../../objects/Selectable';
import { SolidBody } from '../../utils/SolidBody';

interface IArtWork {
    title: string,
    onClick: () => void,
    children: React.ReactElement
    position: [number, number, number]
    pupitreDiameter: number
    pupitreHeight: number
}

export const ArtWork: React.FunctionComponent<IArtWork> = ({ position, pupitreDiameter, pupitreHeight, children, title, onClick }) => {
    const artPos: any = [...position];
    artPos[1] = pupitreHeight;
    const [r, setR] = React.useState(0);

    useInterval(() => {
        setR(() => r + 0.001)
    }, 10);

    return <>
        <Selectable callback={onClick} tip={title}>
            {React.cloneElement(children, {
                position: [
                    position[0],
                    pupitreHeight,
                    position[2]
                ],
                rotation: [0, r, 0]
            })}
        </Selectable>
        <SolidBody dimensions={[pupitreDiameter, pupitreHeight + 2, pupitreDiameter]} position={position}>
            <mesh position={position} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[pupitreDiameter, pupitreDiameter, pupitreHeight, 100]} />
                <meshStandardMaterial attach="material" color="salmon" emissive="white" emissiveIntensity={0.1} />
            </mesh>
        </SolidBody>
    </>
}