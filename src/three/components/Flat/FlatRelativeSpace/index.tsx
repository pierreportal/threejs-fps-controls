import React from 'react';
import { Box } from '../../objects/Box';
import FlatClass from '../../utils/constructorGeometry';
import { SolidBody } from '../../utils/SolidBody';

interface IFlatRelativeSpace {
    children: Array<React.ReactElement>
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

    const backWallLeft = F.innerWall({
        position: [0, 0, 12],
        dimensions: [5, 4, 0.5]
    }, (wall: any) =>
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    );
    const backWallRight = F.innerWall({
        position: [7.1, 0, 12],
        dimensions: [5, 4, 0.5]
    }, (wall: any) =>
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    )

    const backWallTop = F.innerWall({
        position: [4.9, 2.8, 12],
        dimensions: [2.4, 1.2, 0.5]
    }, (wall: any) =>
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    )

    const rightWall = F.build('right', (wall: any, i: number) => {
        return <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box key={i} position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>
    });


    const roof = F.innerWall({
        position: [0, 4, -1],
        dimensions: [13, 1, 13.5]
    }, (wall: any) => (
        <SolidBody dimensions={wall.dimensions} position={wall.position}>
            <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
        </SolidBody>)
    );


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
            dimensions: [1, 4, 7]
        }, (wall: any) =>
            <SolidBody dimensions={wall.dimensions} position={wall.position}>
                <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>
        )}

        {F.innerWall({
            position: [-1, 4, -1],
            dimensions: [1, 2, 14]
        }, (wall: any) =>
            <SolidBody dimensions={wall.dimensions} position={wall.position}>
                <Box position={wall.position as any} dimensions={wall.dimensions as any} floating />
            </SolidBody>
        )}

        {rightWall}
        {roof}
        {backWallLeft}
        {backWallRight}
        {backWallTop}
        {c}
    </group>
}