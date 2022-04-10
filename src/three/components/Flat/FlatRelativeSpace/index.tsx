import React from 'react';
import { Box } from '../../objects/Box';
import FlatClass from '../../utils/constructorGeometry';
import { SolidBody } from '../../utils/SolidBody';

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
            position: child.props.position ? [...child.props.position] : [0, 0, 0],
            dimensions: child.props.dimensions
        }, ({ position, dimensions }: any) => {
            return React.cloneElement(child,
                {
                    key: i,
                    position: position,
                    dimensions: dimensions,
                });
        });
    });

    const walls = ['back', 'right', 'top'].map((side: string) => {
        return F.build(side, (wall: any, i: number) => {
            return <SolidBody key={side} dimensions={wall.dimensions} position={wall.position}>
                <Box key={i} position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>
        });
    })


    return <group position={[0, 0, 0]}>
        {F.innerWall({
            position: [0, 0, -1],
            dimensions: [7, 1.5, 1]
        }, (wall: any) =>
            <SolidBody dimensions={wall.dimensions} position={wall.position}>
                <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>)}

        {F.innerWall({
            position: [0, 3.5, -1],
            dimensions: [7, 0.5, 1]
        }, (wall: any) =>
            <SolidBody dimensions={wall.dimensions} position={wall.position}>
                <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>
        )}

        {F.innerWall({
            position: [7, 0, -1],
            dimensions: [5, 4, 1]
        }, (wall: any) =>
            <SolidBody dimensions={wall.dimensions} position={wall.position}>
                <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>
        )}

        {F.innerWall({
            position: [8, 0, 0],
            dimensions: [0.5, 4, 4]
        }, (wall: any) =>
            <SolidBody dimensions={wall.dimensions} position={wall.position}>
                <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>
        )}


        {/* LEFT */}
        {F.innerWall({
            position: [-1, 0, -5],
            dimensions: [1, 7, 8]
        }, (wall: any) =>
            <SolidBody dimensions={wall.dimensions} position={wall.position}>
                <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>
        )}

        {F.innerWall({
            position: [-1, 0, 6],
            dimensions: [1, 4, 6]
        }, (wall: any) =>
            <SolidBody dimensions={wall.dimensions} position={wall.position}>
                <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>
        )}

        {F.innerWall({
            position: [-1, 4, -1],
            dimensions: [1, 2, 12]
        }, (wall: any) =>
            <SolidBody dimensions={wall.dimensions} position={wall.position}>
                <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>
        )}

        {walls}
        {c}
    </group>
}