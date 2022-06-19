import { useBox } from '@react-three/cannon';
import React from 'react';
import { UserInputMode } from '../../../hooks/useLockControls';
import { useStore } from '../../../hooks/useStore';
import { Selectable } from '../../objects/Selectable';

interface IContactPadScreenProps {
    position: any,
    rotation: any
}

export const ContactPadScreen: React.FunctionComponent<IContactPadScreenProps> = ({ position, rotation }) => {

    const [ref] = useBox(() => (
        {
            type: "Static",
            position,
            rotation,
            args: [0.5, 0.7, 0.1]
        }
    ));

    const { setUserInputMode, setFreePointerEyesOpen } = useStore()

    const displayScreenMail = () => {
        setFreePointerEyesOpen(true);
        document.exitPointerLock();
        setUserInputMode(UserInputMode.Mail);
    }

    return <Selectable tip="I can leave a message on this device." callback={displayScreenMail}>
        <mesh ref={ref} castShadow receiveShadow>
            <boxGeometry attach="geometry" args={[0.5, 0.7, 0.2]} />
            <meshStandardMaterial
                color={'cyan'}
                emissive={'blue'}
            />
        </mesh>
    </Selectable>
}