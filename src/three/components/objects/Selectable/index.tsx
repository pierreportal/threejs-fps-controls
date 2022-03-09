import React from 'react';
import { useStore } from '../../../hooks/useStore';


interface IOwnProps {
    children: React.ReactElement,
    callback: Function,
    tip?: string
}

export const Selectable: React.FunctionComponent<IOwnProps> = ({ children, callback, tip }) => {
    const { setSubtitle } = useStore();

    const [isHovered, setIsHovered] = React.useState<any | null>(null);

    const handleHover = (a: any) => setIsHovered(a);
    const handleLeave = () => setIsHovered(null);
    const handleClick = (e: MouseEvent) => {
        e.stopPropagation();
        callback()
    };

    React.useEffect(() => {
        if (isHovered) {
            // const { children: kid } = children.props
            // if (kid?.props?.position) {
            //     setPointingObjectForDistance(kid?.props?.position)
            // }
            document.getElementById('pointer')?.classList.add('active');
            if (tip) {
                setSubtitle(tip);
            }

        } else {
            // setPointingObjectForDistance(null)
            document.getElementById('pointer')?.classList.remove('active');
            if (tip) {
                setSubtitle(null)

            }
        }
    }, [isHovered, setSubtitle, tip])

    const selectableChild = React.cloneElement(children, {
        onPointerEnter: handleHover,
        onPointerLeave: handleLeave,
        onClick: handleClick,
        isHovered
    });

    return selectableChild;
};