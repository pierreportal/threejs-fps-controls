import React from 'react';
import { useLoader } from 'react-three-fiber';
import { RepeatWrapping, TextureLoader } from 'three';


export const useTexturizer = (folder: string) => {
    const [map, displacementMap, normalMap, roughnessMap, aoMap, metalnessMap] = useLoader(TextureLoader, [
        `/assets/textures/${folder}/basecolor.jpg`,
        `/assets/textures/${folder}/height.png`,
        `/assets/textures/${folder}/normal.jpg`,
        `/assets/textures/${folder}/roughness.jpg`,
        `/assets/textures/${folder}/ambientOcclusion.jpg`,
        // `/assets/textures/${folder}/metallic.jpg`,
    ]);

    const R = 5;

    map.wrapS = map.wrapT = RepeatWrapping;
    map.repeat.set(R, R);
    // colorMap.anisotropy = 16;
    //
    displacementMap.wrapS = displacementMap.wrapT = RepeatWrapping;
    displacementMap.repeat.set(R, R);
    // displacementMap.anisotropy = 16;
    //
    normalMap.wrapS = normalMap.wrapT = RepeatWrapping;
    normalMap.repeat.set(R, R);
    // normalMap.anisotropy = 16;
    //
    roughnessMap.wrapS = roughnessMap.wrapT = RepeatWrapping;
    roughnessMap.repeat.set(R, R);
    // roughnessMap.anisotropy = 16;
    //
    aoMap.wrapS = aoMap.wrapT = RepeatWrapping;
    aoMap.repeat.set(R, R);
    // aoMap.anisotropy = 16;

    // metalnessMap.wrapS = metalnessMap.wrapT = RepeatWrapping;
    // metalnessMap.repeat.set(R, R);

    return { map, displacementMap, normalMap, roughnessMap, aoMap, metalnessMap }
}