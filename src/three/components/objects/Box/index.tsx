import React from 'react';
import { useBox } from '@react-three/cannon';
import { useTexturizer } from '../../../hooks/useTexturizer';

interface SelectableElementProps {
    onPointerMove?: (event: any) => void;
    onPointerLeave?: (event?: any) => void;
    onClick?: (event?: any) => void;
}
interface IBoxProps {
    ref?: any
    floating?: boolean;
    mass?: number;
    position: [x: number, y: number, z: number];
    dimensions: any;
    texture?: string;
    textureWrapping?: number[];
    isHovered?: any | null;
    color?: string
}

const Box_: React.FunctionComponent<IBoxProps & SelectableElementProps> = (
    {
        ref: propsRef,
        floating,
        mass = 1,
        position,
        dimensions,
        onPointerMove,
        onClick,
        isHovered,
        onPointerLeave,
        texture,
        textureWrapping,
        color
    }
) => {

    const meterialRef = React.useRef()

    // const loadedTexture = useTexturizer(texture, textureWrapping);

    const tunedPosition: [x: number, y: number, z: number] = [...position];
    tunedPosition[1] += dimensions[1] / 2;

    // const [ref] = useBox(() => (
    //     {
    //         type: floating ? "Static" : "Dynamic",
    //         mass,
    //         position: tunedPosition,
    //         args: dimensions
    //     }
    // ));



    const meshProps: SelectableElementProps = {}

    meshProps.onPointerMove = (e: any) => {
        e.stopPropagation();
        if (onPointerMove) {
            onPointerMove(e)
        }
    }
    meshProps.onPointerLeave = (e: any) => {
        e.stopPropagation();
        if (onPointerLeave) {
            onPointerLeave()
        }
    }
    meshProps.onClick = (e: any) => {
        e.stopPropagation();
        if (onClick) {
            onClick()
        }
    }

    return <mesh position={tunedPosition}
        // ref={ref}
        receiveShadow
        castShadow
        {...meshProps}>
        <boxGeometry
            attach="geometry"
            args={[...dimensions] as any}
        />
        <meshStandardMaterial
            color={color || 'grey'}
            displacementScale={0}
            emissive={isHovered ? 'hsl(180, 70%, 50%)' : 'black'}
        // {...loadedTexture}
        />
    </mesh>
}

export const Box = React.memo(Box_);