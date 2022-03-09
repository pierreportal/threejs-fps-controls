import { Html } from '@react-three/drei';
import React from 'react';

interface ITextTooltipProps {
    heading: string;
    text: string;
    position: [x: number, y: number, z: number]
}
export const TextTooltip: React.FunctionComponent<ITextTooltipProps> = ({ heading, text, position }) => {
    return <Html
        position={position}
        as="div"
        className="tooltip"
    >
        <h1>{heading}</h1>
        <p>{text}</p>
    </Html>
}