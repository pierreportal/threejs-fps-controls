import React from 'react';
import { useInterval } from '../../../hooks/useInterval';
import { Box } from '../../objects/Box';
import FlatClass from '../../utils/constructorGeometry';
import { SolidBody } from '../../utils/SolidBody';


interface IHallwayRelativeSpace {
    children: Array<React.ReactElement>
    // position: [number, number, number]
}

const H = new FlatClass(
    [0, 0, -12],
    [4, 12],
    4
)

export const HallwayRelativeSpace: React.FunctionComponent<IHallwayRelativeSpace> = ({ children }) => {

    const c = children.map((child: React.ReactElement, i: number) => {
        return H.innerWall({
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

    const sideWallRight = H.innerWall({
        position: [4, 0, 0.5],
        dimensions: [1, 4, 14]
    }, (wall: any) =>
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="orange" position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    );

    const leftWallRight = H.innerWall({
        position: [-1, 0, 0.5],
        dimensions: [1, 4, 10]
    }, (wall: any) =>
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="orange" position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    );

    const roof = H.innerWall({
        position: [-1, 4, 0.5],
        dimensions: [6, 1, 15]
    }, (wall: any) =>
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="orange" position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    );


    const turnRoof = H.innerWall({
        position: [-11, 4, 9.5],
        dimensions: [10, 1, 6]
    }, (wall: any) =>
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="orange" position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    );



    const turnWallInner = H.innerWall({
        position: [-11, 0, 9.5],
        dimensions: [10, 4, 1]
    }, (wall: any) =>
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="orange" position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    );

    const turnWallOuter = H.innerWall({
        position: [-11, 0, 14.5],
        dimensions: [16, 4, 1]
    }, (wall: any) =>
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="orange" position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    );

    return <>
        {roof}
        {leftWallRight}
        {sideWallRight}

        {turnRoof}
        {turnWallInner}
        {turnWallOuter}
        {c}
    </>

}