import React from 'react';
import { MailScreen } from '../MailScreen';
import { TextTooltip } from '../three/components/TextTooltip';
import { useLockControls, UserInputMode } from '../three/hooks/useLockControls';
import { useStore } from '../three/hooks/useStore';

interface INotificationManagerProps {
    children: React.ReactElement | Array<React.ReactElement | false>
}

interface IUserInputScreenProps {
    mode: UserInputMode
}
const UserInputScreen: React.FunctionComponent<IUserInputScreenProps> = ({ mode }) => {
    const { setUserInputMode, setFreePointerEyesOpen } = useStore();
    const { controlOn } = useLockControls()

    const handleCancel = (event: any) => {
        setUserInputMode(null);
        setFreePointerEyesOpen(false);
        controlOn(event);
    }

    switch (mode) {
        case UserInputMode.Mail:
            return <MailScreen quit={handleCancel} />
        default:
            return <></>
    }
}

export const NotificationManager: React.FunctionComponent<INotificationManagerProps> = ({ children }) => {

    const { notification, subtitle, tooltip, displayTerminalWindow, mainTitle, secondHeading, userInstruction, userInputMode, playGeneric } = useStore();

    const s = userInputMode && <div id="user-input-screen">
        <UserInputScreen mode={userInputMode} />
    </div>

    return <>
        {s}
        {playGeneric && <h1>Thanks here comes generic, credits and so on...</h1>}
        {notification && ""}
        {displayTerminalWindow && <div id="terminal-window"></div>}
        {tooltip && <TextTooltip heading={tooltip.heading} text={tooltip.text} position={tooltip.position} />}
        <div id="subtitle">{subtitle}</div>
        <div id="user-instruction">{userInstruction}</div>
        {mainTitle && <h1 id="main-title">{mainTitle}</h1>}
        {secondHeading && <h2 id="second-heading">{secondHeading}</h2>}
        {children}
    </>
};