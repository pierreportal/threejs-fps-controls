import React from 'react';
import * as THREE from 'three';
import { useRayCasting } from '../../../hooks/useRayCasting';
import { useStore } from '../../../hooks/useStore';


interface IOwnProps {
    children: React.ReactElement,
    callback: Function,
    tip?: string,
    userInstructionTip?: string,
    restrictedArea?: string,
}

const _Selectable: React.FunctionComponent<IOwnProps> = ({ children, callback, tip, restrictedArea, userInstructionTip }) => {

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


    // if (restrictedArea && restrictedArea !== mainTitle) {
    //     return React.cloneElement(children, { onPointerLeave: handleLeave })
    // };

    // console.log('selectable children:', document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2))

    // const { camera } = useStore();
    // const refRayCast = React.useRef(null);
    // const raycaster = new THREE.Raycaster();
    // camera && raycaster.setFromCamera({ x: window.innerWidth / 2, y: window.innerHeight / 2 }, camera);
    // const intersects = raycaster.intersectObjects([]);
    // console.log('intersects:', intersects);

    const selectableChild = React.cloneElement(children, {
        ...children.props,
        // ref: refRayCast,
        onPointerEnter: handleHover,
        onPointerLeave: handleLeave,
        onClick: handleClick,
        isHovered
    });


    // const SelectableRayCastable = React.forwardRef((props, ref) => (
    //     React.cloneElement(children, {
    //         ...children.props,
    //         ref,
    //         onPointerEnter: handleHover,
    //         onPointerLeave: handleLeave,
    //         onClick: handleClick,
    //         isHovered
    //     })
    // ));

    // You can now get a ref directly to the DOM button:
    // const ref = React.createRef();
    // return <SelectableRayCastable ref={ref} />;

    return selectableChild





    // const refRayCast = React.forwardRef((props, ref) => (
    //     React.cloneElement(children, {
    //         ...children.props,
    //         ref: ref,
    //         onPointerEnter: handleHover,
    //         onPointerLeave: handleLeave,
    //         onClick: handleClick,
    //         isHovered
    //     })
    // ));

    // return refRayCast;
};

export const Selectable = React.memo(_Selectable, () => true);