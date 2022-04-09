import React from 'react';
import { TextTooltip } from '../three/components/TextTooltip';
import { useStore } from '../three/hooks/useStore';

interface INotificationManagerProps {
    children: React.ReactElement | Array<React.ReactElement | false>
}

export const NotificationManager: React.FunctionComponent<INotificationManagerProps> = ({ children }) => {

    const { notification, subtitle, tooltip, displayTerminalWindow, mainTitle, secondHeading } = useStore();

    return <>
        {notification && ""}
        {displayTerminalWindow && <div id="terminal-window"></div>}
        {tooltip && <TextTooltip heading={tooltip.heading} text={tooltip.text} position={tooltip.position} />}
        <div id="subtitle">{subtitle}</div>
        {mainTitle && <h1 id="main-title">{mainTitle}</h1>}
        {secondHeading && <h2 id="second-heading">{secondHeading}</h2>}
        {children}
    </>
};