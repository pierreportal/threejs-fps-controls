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

export const Computer: React.FunctionComponent<IComputerProps> = ({ position, rotation }) => {
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
                <planeBufferGeometry attach="geometry" args={[.6, .6]} />
                <meshPhongMaterial
                    map={textureScreen}
                    transparent
                    emissive={'cyan'}
                />
                <pointLight intensity={.02} color="green" />
                <rectAreaLight color="cyan" intensity={1} width={1} height={1} rotation={rotation} />
            </mesh>
        </Selectable>
        <Selectable callback={displayScreenTerminal} tip={"Maybe I can type something..."} restrictedArea={"About"}>
            <mesh>
                <MacKeyboard rotation={rotation} scale={0.05} position={[0, - 0.5, 0.5]} />
            </mesh>
        </Selectable>
    </group>
};