import React from 'react';
import { Box } from '../../objects/Box';
import FlatClass from '../../utils/constructorGeometry';
import { SolidBody } from '../../utils/SolidBody';

interface IShowRoomRelativeSpace {
    children: Array<React.ReactElement>
    // position: [number, number, number]
}

const SHOW_ROOM_HEIGHT = 6;

const S = new FlatClass(
    [-11.5, -0.5, 1.5],
    [9, 9],
    SHOW_ROOM_HEIGHT
)

export const ShowRoomRelativeSpace: React.FunctionComponent<IShowRoomRelativeSpace> = ({ children }) => {

    const c = children.map((child: React.ReactElement, i: number) => {
        return S.innerWall({
            position: [...child.props.position],
            dimensions: child.props.dimensions
        }, (wall: any) => {
            return React.cloneElement(child, { key: i, position: wall.position, dimensions: wall.dimensions })
        })
    });

    const stepEntrance = S.innerWall({
        position: [9, 0, 0],
        dimensions: [1, 0.5, 10]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const frontWall = S.innerWall({
        position: [-1, 0, -1],
        dimensions: [10, SHOW_ROOM_HEIGHT, 1]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="white" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const leftWall = S.innerWall({
        position: [-1, 0, -1],
        dimensions: [1, SHOW_ROOM_HEIGHT, 11]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="white" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const backWall = S.innerWall({
        position: [-1, 0, 9],
        dimensions: [10, SHOW_ROOM_HEIGHT, 1]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="white" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const topWall = S.innerWall({
        position: [-1, SHOW_ROOM_HEIGHT, -1],
        dimensions: [10, 1, 10]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box color="white" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const rightColorWallFront = S.innerWall({
        position: [9, 0, -1],
        dimensions: [.1, SHOW_ROOM_HEIGHT, 4]
    }, (wall: any) => {
        return <Box color="white" position={wall.position} dimensions={wall.dimensions} floating />
    })

    const rightColorWallBack = S.innerWall({
        position: [9, 0, 6],
        dimensions: [.1, SHOW_ROOM_HEIGHT, 4]
    }, (wall: any) => {
        return <Box color="white" position={wall.position} dimensions={wall.dimensions} floating />
    })

    const rightColorWallCenterTop = S.innerWall({
        position: [9, 4.5, -1],
        dimensions: [.1, 2, 9]
    }, (wall: any) => {
        return <Box color="white" position={wall.position} dimensions={wall.dimensions} floating />
    })

    const rightColorWallCenterBottom = S.innerWall({
        position: [9, 0, -1],
        dimensions: [.1, 0.5, 9]
    }, (wall: any) => {
        return <Box color="white" position={wall.position} dimensions={wall.dimensions} floating />
    })

    return <>
        {frontWall}
        {backWall}
        {stepEntrance}
        {leftWall}
        {topWall}
        {rightColorWallFront}
        {rightColorWallBack}
        {rightColorWallCenterTop}
        {rightColorWallCenterBottom}
        {c}
    </>
}