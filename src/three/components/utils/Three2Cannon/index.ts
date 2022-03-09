import { threeToCannon, ShapeType } from 'three-to-cannon';

export const connonizeObject = (object3D: any) => {

    const result = threeToCannon(object3D, { type: ShapeType.BOX });

    return result;
};