
const HEIGHT_WALLS = 4;

export interface IWorldElement {
    position: [x: number, y: number, z: number],
    dimensions: [w: number, h: number, d: number],
    floating: boolean,
    texture: string,
    textureWrapping: [a: number, b: number],
    color?: string
}

export interface ISelectableWorldElement extends IWorldElement {
    tip: string,
    callback?: () => void
}

export const walls: Array<IWorldElement> = [
    {
        position: [-1.8, 0, -6], // top
        dimensions: [7.2, HEIGHT_WALLS, 1],
        floating: true,
        texture: 'whiteMarble',
        textureWrapping: [3, 2],
        color: 'grey'
    },
    {
        position: [1.8, 0, -4],
        dimensions: [0.5, HEIGHT_WALLS, 3.1],
        floating: true,
        texture: 'whiteMarble',
        textureWrapping: [8, 8],
        color: 'grey'
    },
    {
        position: [4, 0, -5],
        dimensions: [4, HEIGHT_WALLS, 1],
        floating: true,
        texture: 'test3',
        textureWrapping: [8, 8],
        color: 'grey'
    },
    {
        position: [6, 0, 3],
        dimensions: [1, HEIGHT_WALLS, 6],
        floating: true,
        texture: 'test',
        textureWrapping: [1, 1],
        color: 'grey',
    },
    {
        position: [0, 0, 6], // bottom
        dimensions: [14, HEIGHT_WALLS, 1],
        floating: true,
        texture: 'test',
        textureWrapping: [1, 1],
        color: 'grey',
    },
    {
        position: [-5, 0, 3], // left
        dimensions: [1, HEIGHT_WALLS, 6],
        floating: true,
        texture: 'wall1',
        textureWrapping: [3, 3
        ]
    },
    {
        position: [-5, 0, -3], // left
        dimensions: [1, 1.5, 6],
        floating: true,
        texture: 'wall1',
        textureWrapping: [3, 3
        ]
    },
    {
        position: [2, HEIGHT_WALLS, -2], // ceilling
        dimensions: [15, 1, 15],
        floating: true,
        texture: 'wall1',
        textureWrapping: [16, 16]
    }
];

export const staticFurnitures: Array<IWorldElement> = [
    {
        position: [-1, 1, -2], // kitchen table
        dimensions: [2, 0.5, 4],
        floating: true,
        texture: 'wall1',
        textureWrapping: [3, 3]
    },
    {
        position: [-1, 0, -2], // kitchenTableFoot
        dimensions: [1, 1, 2],
        floating: true,
        texture: 'wall1',
        textureWrapping: [3, 3]
    },
    // {
    //     position: [-3, 0, 3], // separatorWall
    //     dimensions: [4, HEIGHT_WALLS, 0.3],
    //     floating: true,
    //     texture: 'metalPlate',
    //     textureWrapping: [3, 3],
    //     color: 'grey'
    // },
    {
        position: [0, 1, -5.3], // bookshelf
        dimensions: [4, .1, 0.5],
        floating: true,
        texture: 'test2',
        textureWrapping: [3, 3]
    },
    {
        position: [1.3, 1, -4], // bookshelf2
        dimensions: [.5, .1, 3],
        floating: true,
        texture: 'test2',
        textureWrapping: [3, 3]
    },
    {
        position: [0, 2, -5.3], // bookshelfTop
        dimensions: [4, .1, 0.5],
        floating: true,
        texture: 'test2',
        textureWrapping: [3, 3]
    },
    {
        position: [-2, 1, -5.3], // bookshelfSideTop
        dimensions: [.1, 1.1, 0.5],
        floating: true,
        texture: 'test2',
        textureWrapping: [3, 3]
    },
    {
        position: [1.3, 0, -2.5], // bookshelfSideDown
        dimensions: [.5, 1.1, 0.1],
        floating: true,
        texture: 'test2',
        textureWrapping: [3, 3]
    },
    {
        position: [1.3, 2, -4], // bookshelfTop2
        dimensions: [.5, .1, 3],
        floating: true,
        texture: 'test2',
        textureWrapping: [3, 3]
    }
];

export const selectableObjects: Array<ISelectableWorldElement> = [
    {
        position: [2, 2, -1],
        dimensions: [.2, .2, .2],
        floating: false,
        texture: 'test3',
        textureWrapping: [3, 3],
        tip: "That's interesting...",
    },
    {
        position: [-5, 2, -3],
        dimensions: [.2, .2, .2],
        floating: false,
        texture: 'test3',
        textureWrapping: [3, 3],
        tip: "That's interesting...",
        callback: () => console.log('YAAAYYYY')
    }
]