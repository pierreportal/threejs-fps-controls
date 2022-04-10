import { Physics } from '@react-three/cannon';
import React from 'react';
import { FullScreenCanvas } from './styles';
/*
 *  npx gltfjsx boxModel.gltf
 */
interface IUniverseProps {
    children: React.ReactElement[] | React.ReactElement
}

export const Universe: React.FunctionComponent<IUniverseProps> = ({ children }) => {

    return <>
        <div id="eye-lid-up" className="closed">
        </div>
        <FullScreenCanvas shadows>
            <Physics gravity={[0, -9.81, 0]}>
                {children}
            </Physics>
        </FullScreenCanvas>
        <div id="eye-lid-down" className="closed">
        </div>
    </>
}