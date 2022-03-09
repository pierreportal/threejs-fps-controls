import React from 'react';
import { Box } from '../../objects/Box';
import FlatClass from '../../utils/constructorGeometry';
import { SolidBody } from '../../utils/SolidBody';
import SeparatorWall from '../SeparatorWall';

interface IFlatRelativeSpace {
    children: Array<React.ReactElement>
    // position: [number, number, number]
}

const F = new FlatClass(
    [0, 0, 0],
    [12, 12],
    4
)

export const FlatRelativeSpace: React.FunctionComponent<IFlatRelativeSpace> = ({ children }) => {

    const c = children.map((child: React.ReactElement, i: number) => {
        return F.innerWall({
            position: [...child.props.position],
            dimensions: child.props.dimensions
        }, (wall: any) => {
            return React.cloneElement(child, { key: i, position: wall.position, dimensions: wall.dimensions })
        })
    });

    const walls = F.build(false, (wall: any, i: number) => {
        return <Box key={i} position={wall.position as any} dimensions={wall.dimensions as any} floating />
    });

    return <group position={[0, 0, 0]}>
        {F.innerWall({
            position: [0, 0, -1],
            dimensions: [7, 1.5, 1]
        }, (wall: any) => <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />)}
        {F.innerWall({
            position: [0, 3.5, -1],
            dimensions: [7, 0.5, 1]
        }, (wall: any) => <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />)}
        {F.innerWall({
            position: [7, 0, -1],
            dimensions: [1, 4, 1]
        }, (wall: any) => <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />)}
        {F.innerWall({
            position: [8, 0, 0],
            dimensions: [0.5, 4, 4]
        }, (wall: any) => <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />)}d
        {walls}
        {c}
    </group>
}