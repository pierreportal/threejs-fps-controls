import React from 'react';
import { useStore } from '../../hooks/useStore';

interface INavigationZone {
    position: [number, number, number]
    dimensions: [number, number, number]
    route: string
    debug?: boolean
}

export const NavigationZone: React.FunctionComponent<INavigationZone> = ({ position, dimensions, route, debug }) => {
    const { setMainTitle, setNavigationZone } = useStore();

    const props: any = {}
    if (debug) {
        props.color = 'blue'
        props.opacity = 0.1
    }
    return <mesh
        onPointerEnter={() => {
            setNavigationZone(true)
            setMainTitle(route)
        }}
        onPointerLeave={() => {
            setNavigationZone(false)
        }}
        position={position}
    >
        <boxGeometry args={dimensions as any} />
        <meshBasicMaterial {...props} transparent={true} />
    </mesh>
};