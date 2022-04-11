import React from 'react';
import { useStore } from '../../../hooks/useStore';
import { Box } from '../../objects/Box';
import { Plane } from '../../objects/Plane';
import FlatClass from '../../utils/constructorGeometry';
import { SolidBody } from '../../utils/SolidBody';

interface IShowRoomRelativeSpace {
    children: Array<React.ReactElement>
    // position: [number, number, number]
}

const SHOW_ROOM_HEIGHT = 10;
const SHOW_ROOM_WIDTH = 17;
const SHOW_ROOM_LENGTH = 17;

const SHOW_ROOM_POSITION = {
    x: -(SHOW_ROOM_WIDTH - 1.4),
    y: 1.5,
    z: -0.5
}
const SHOW_ROOM_POSITION_ARRAY = [SHOW_ROOM_POSITION.x, SHOW_ROOM_POSITION.z, SHOW_ROOM_POSITION.y] as any

const S = new FlatClass(
    SHOW_ROOM_POSITION_ARRAY,
    [SHOW_ROOM_WIDTH, SHOW_ROOM_LENGTH],
    SHOW_ROOM_HEIGHT
);

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
        position: [SHOW_ROOM_WIDTH, 0, 0],
        dimensions: [1, 0.5, SHOW_ROOM_WIDTH + 1]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const frontWall = S.innerWall({
        position: [-1, 0, -1],
        dimensions: [SHOW_ROOM_WIDTH + 1, SHOW_ROOM_HEIGHT, 1]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box emissive={'white'} emissiveIntensity={0.1} color="salmon" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const leftWall = S.innerWall({
        position: [-1, 0, -1],
        dimensions: [1, SHOW_ROOM_HEIGHT, SHOW_ROOM_WIDTH + 2]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box emissive={'white'} emissiveIntensity={0.1} color="salmon" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const backWall = S.innerWall({
        position: [-1, 0, SHOW_ROOM_WIDTH],
        dimensions: [SHOW_ROOM_WIDTH + 1, SHOW_ROOM_HEIGHT, 1]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box emissive={'white'} emissiveIntensity={0.1} color="salmon" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const topWall = S.innerWall({
        position: [-1, SHOW_ROOM_HEIGHT, -1],
        dimensions: [SHOW_ROOM_WIDTH + 1, 1, SHOW_ROOM_WIDTH + 2]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box emissive={'white'} emissiveIntensity={0.1} color="salmon" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const rightColorWallFront = S.innerWall({
        position: [SHOW_ROOM_WIDTH, 0, -1],
        dimensions: [.1, SHOW_ROOM_HEIGHT, 8]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box emissive={'white'} emissiveIntensity={0.1} color="salmon" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const rightColorWallBack = S.innerWall({
        position: [SHOW_ROOM_WIDTH, 0, 10],
        dimensions: [.1, SHOW_ROOM_HEIGHT, 8]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box emissive={'white'} emissiveIntensity={0.1} color="salmon" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const rightColorWallCenterTop = S.innerWall({
        position: [SHOW_ROOM_WIDTH, 4.5, -1],
        dimensions: [.1, 6, SHOW_ROOM_WIDTH + 1]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box emissive={'white'} emissiveIntensity={0.1} color="salmon" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const rightColorWallCenterBottom = S.innerWall({
        position: [SHOW_ROOM_WIDTH, 0, -1],
        dimensions: [.1, 0.5, SHOW_ROOM_WIDTH + 1]
    }, (wall: any) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box emissive={'white'} emissiveIntensity={0.1} color="salmon" position={wall.position} dimensions={wall.dimensions} floating />
        </SolidBody>
    })

    const floor = S.innerWall({
        position: [0, 0, 0],
        dimensions: [SHOW_ROOM_WIDTH, 0, SHOW_ROOM_WIDTH]
    }, ({ position, dimensions }: any) => <Plane dimensions={dimensions} position={position} color="lightgrey" emissive={"white"} emissiveIntensity={0.05} />)


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
        {floor}
    </>
}