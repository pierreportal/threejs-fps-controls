import React from 'react';
import { useStore } from '../../../hooks/useStore';


interface IOwnProps {
    children: React.ReactElement,
    callback: Function,
    tip?: string,
    userInstructionTip?: string,
    restrictedArea?: string,
}

export const Selectable: React.FunctionComponent<IOwnProps> = ({ children, callback, tip, restrictedArea, userInstructionTip }) => {

    const { setSubtitle, setUserInstruction, mainTitle } = useStore();
    const [isHovered, setIsHovered] = React.useState<any | null>(null);

    const handleHover = (a: any) => setIsHovered(a);
    const handleLeave = () => setIsHovered(null);
    const handleClick = (e: MouseEvent) => {
        e.stopPropagation();
        callback()
    };

    React.useEffect(() => {
        if (isHovered) {
            document.getElementById('pointer')?.classList.add('active');
            if (tip) {
                setSubtitle(tip);
            }
            if (userInstructionTip) {
                setUserInstruction(userInstructionTip)
            }

        } else {
            document.getElementById('pointer')?.classList.remove('active');
            if (tip) {
                setSubtitle(null)
            }
            if (userInstructionTip) {
                setUserInstruction(null)
            }
        }
    }, [isHovered, setSubtitle, tip])

    if (restrictedArea && restrictedArea !== mainTitle) {
        return React.cloneElement(children, { onPointerLeave: handleLeave })
    };

    const selectableChild = React.cloneElement(children, {
        onPointerEnter: handleHover,
        onPointerLeave: handleLeave,
        onClick: handleClick,
        isHovered
    });

    return selectableChild;
};