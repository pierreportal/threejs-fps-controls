// import { Box3 } from "three";

export const intersect = (a: any, b: any) => {
    return (a.min.x <= b.max.x && a.max.x >= b.min.x) &&
        (a.min.y <= b.max.y && a.max.y >= b.min.y) &&
        (a.min.z <= b.max.z && a.max.z >= b.min.z);
}

export const scaleBoumdingBox = (object: any, factor: number) => {
    const scaledObject = { ...object };
    scaledObject.min.x -= factor;
    scaledObject.max.x += factor;
    scaledObject.min.z -= factor;
    scaledObject.max.z += factor;
    scaledObject.min.y -= factor;
    scaledObject.max.y += factor;
    return scaledObject;
}