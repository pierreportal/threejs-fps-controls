import { useBox } from '@react-three/cannon';
import React from 'react';
import { useLoader } from 'react-three-fiber';
import { Euler, TextureLoader } from 'three';
import { useStore } from '../../../hooks/useStore';
import { Selectable } from '../../objects/Selectable';
import MacKeyboard from './models/MacKeyboard';

interface IComputerProps {
    position: any;
    rotation: Euler;
}

export const _Computer: React.FunctionComponent<IComputerProps> = ({ position, rotation }) => {
    const textureScreen = useLoader(TextureLoader, '/assets/images/screenTest.png')

    const [ref] = useBox(() => (
        {
            type: "Static",
            position,
            args: [.6, .6, .6]
        }
    ));

    const { setEnableControls, setDisplayTerminalWindow } = useStore()

    const displayScreenTerminal = () => {
        document.exitPointerLock();
        setEnableControls(false);
        setDisplayTerminalWindow(true)
    }

    return <group ref={ref} position={position}>
        <Selectable callback={() => false} tip={"I am a software engineer"} restrictedArea={"About"}>
            <mesh>
                <boxBufferGeometry attach="geometry" args={[.6, .6, 0.00001]} />
                <meshPhongMaterial
                    map={textureScreen}
                    transparent
                    emissive={'cyan'}
                />
            </mesh>
        </Selectable>
        <Selectable callback={displayScreenTerminal} tip={"Maybe I can type something..."} restrictedArea={"About"}>
            <mesh>
                <MacKeyboard rotation={rotation} scale={0.05} position={[0, - 0.5, 0.5]} />
            </mesh>
        </Selectable>
    </group>
};

export const Computer = React.memo(_Computer)
