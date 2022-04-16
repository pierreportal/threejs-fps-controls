import { useBox } from '@react-three/cannon';
import React from 'react';
import { useLoader } from 'react-three-fiber';
import { Euler, TextureLoader } from 'three';
import { UserInputMode } from '../../../hooks/useLockControls';
import { useStore } from '../../../hooks/useStore';
import { Selectable } from '../../objects/Selectable';
import MacKeyboard from './models/MacKeyboard';

interface IComputerProps {
    position: any;
    rotation: Euler;
}

const EMAIL = 'pierreportal.mac@gmail.com';
const SUBJECT = 'contact via portfolio';


export const _Computer: React.FunctionComponent<IComputerProps> = ({ position, rotation }) => {
    const textureScreen = useLoader(TextureLoader, '/assets/images/screenTest.png');

    const [ref] = useBox(() => (
        {
            type: "Static",
            position,
            args: [.6, .6, .6]
        }
    ));

    const { setUserInputMode, setFreePointerEyesOpen } = useStore()

    const displayScreenTerminal = () => {
        setFreePointerEyesOpen(true);
        document.exitPointerLock();
        setUserInputMode(UserInputMode.Mail);
    }

    return <group ref={ref} position={position}>
        <Selectable userInstructionTip={"click to visit Github"} callback={() => window.open('https://github.com/pierreportal', "_blank")} tip={"I am a software engineer"} restrictedArea={"About"}>
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
