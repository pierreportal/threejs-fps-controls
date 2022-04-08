const FLAT_POSITION = [0, 0, 0] as any;
const FLAT_SURFACE = [10, 10];
const FLAT_HEIGHT = 4;

interface IflatBorderPosition {
    left: [number, number, number]
    right: [number, number, number]
    front: [number, number, number]
    back: [number, number, number]
    centerCenter: [number, number, number]
};

const flatBorderPosition: IflatBorderPosition = {
    left: [FLAT_POSITION[0] - FLAT_SURFACE[0] / 2 - 0.5, 0, 0],
    right: [FLAT_POSITION[0] + FLAT_SURFACE[0] / 2 + 0.5, 0, 0],
    front: [0, 0, FLAT_POSITION[0] - FLAT_SURFACE[0] / 2 - 0.5],
    back: [0, 0, FLAT_POSITION[0] + FLAT_SURFACE[0] / 2 + 0.5],
    centerCenter: [FLAT_POSITION[0], 0, FLAT_POSITION[0]]
};

interface IflatBorderDimension {
    length: [number, number, number]
    width: [number, number, number]
}

const flatBorderDimension: IflatBorderDimension = {
    length: [1, FLAT_HEIGHT, FLAT_SURFACE[1] + 2],
    width: [FLAT_SURFACE[0] + 2, FLAT_HEIGHT, 1],
};


const FLAT = {
    dimensions: [10, 4, 10],
    position: [0, 0, 0],
    getBorder: (side: keyof IflatBorderPosition) => flatBorderPosition[side] as any
};

type Surface = [number, number];
type Position = [number, number, number];
type Dimensions = [number, number, number];


const DEFAULT_POSITION = { x: 0, y: 0, z: 0 };

class Flat {
    public furnitures = [];
    public length = 0;
    public width = 0;
    public height = 0;
    public position = DEFAULT_POSITION;
    public flatBorderPosition = { left: [0, 0, 0], right: [0, 0, 0], back: [0, 0, 0], front: [0, 0, 0], top: [0, 0, 0], centerCenter: [0, 0, 0] };
    public flatBorderDimension = { length: [0, 0], width: [0, 0] }

    constructor(position: Position, surface: Surface, height: number) {
        this.length = surface[1];
        this.width = surface[0];
        this.height = height;
        this.position = {
            x: position[0],
            y: position[2],
            z: position[1],
        }

        this.flatBorderPosition = {
            left: [this.position.x - this.length / 2 - 0.5, this.position.z, this.position.y],
            right: [this.position.x + this.length / 2 + 0.5, this.position.z, this.position.y],
            front: [this.position.x, this.position.z, this.position.y - this.width / 2 - 0.5],
            back: [this.position.x, this.position.z, this.position.y + this.width / 2 + 0.5],
            top: [this.position.x, this.position.z + this.height, this.position.y],
            centerCenter: [this.position.x, this.position.z, this.position.y]
        }

        this.flatBorderDimension = {
            length: [1, this.height, this.length + 2],
            width: [this.width + 2, this.height, 1],
        };

        this.furnitures = [];
    }

    innerWall = ({ position, dimensions }: any, callback: any) => {
        const [width, , length] = (dimensions || [0, 0, 0]);
        const flatPosition = this.position;
        const wallPosition = position;
        wallPosition[0] += flatPosition.x + width / 2 - this.width / 2;
        wallPosition[1] += flatPosition.z;
        wallPosition[2] -= flatPosition.y - length / 2 + this.length / 2;
        return callback({ position: wallPosition, dimensions })
    }

    build = (side: string | false, callback: any) => {
        const front = {
            position: this.flatBorderPosition.front,
            dimensions: this.flatBorderDimension.width
        }
        const back = {
            position: this.flatBorderPosition.back,
            dimensions: this.flatBorderDimension.width
        }
        const left = {
            position: this.flatBorderPosition.left,
            dimensions: this.flatBorderDimension.length
        }
        const right = {
            position: this.flatBorderPosition.right,
            dimensions: this.flatBorderDimension.length
        }
        const top = {
            position: this.flatBorderPosition.top,
            dimensions: [this.width, 1, this.length]
        }
        const sides = { front, back, left, right, top } as any
        return side ? callback(sides[side]) : Object.values(sides).map((s: any, i: number) => callback(s, i));
    }
}

export default Flat;