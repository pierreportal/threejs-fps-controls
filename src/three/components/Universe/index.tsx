import { Physics } from '@react-three/cannon';
import React from 'react';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { FullScreenCanvas } from './styles';
import { CameraShake, CycleRaycast, Sky, Stars } from '@react-three/drei';
import { useThree } from 'react-three-fiber';
import { Player } from '../Player';
/*
 *  npx gltfjsx boxModel.gltf
 */
interface IUniverseProps {
    children: React.ReactElement[] | React.ReactElement
}

export const Universe: React.FunctionComponent<IUniverseProps> = ({ children }) => {




    return <FullScreenCanvas shadows>
        <Stars />
        <ambientLight intensity={0.25} />
        <spotLight
            castShadow
            intensity={0.4}
            position={[10, 10, 10]}
            shadow-mapSize-height={144 * 40}
            shadow-mapSize-width={144 * 40}
        />



        <Physics gravity={[0, -9.81, 0]}>
            <EffectComposer>
                <>
                    {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
                    {children}
                </>
            </EffectComposer>
        </Physics>
    </FullScreenCanvas>
}