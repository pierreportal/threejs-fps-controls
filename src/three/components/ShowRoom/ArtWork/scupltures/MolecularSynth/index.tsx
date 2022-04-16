import React from "react";
import { Circle } from './MolSynthCircle';
import { Square } from './MolSynthSquare';


export const MolecularSynth: React.FunctionComponent<any> = ({ ...props }: any) => {
    const posA = [...props.position];
    posA[1] += .5;
    const posB = [...props.position];
    posB[1] -= .5;
    return <mesh>
        <Circle {...props} rotation={[130, 130, 0]} position={posA} />
        <Square {...props} rotation={[80, -100, 0]} position={posB} />
    </mesh>
}