import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BoxModel2 } from '../BoxModel2'

interface IModelLoaderProps {
    modelFileName: string;
}
export const ModelLoader: React.FunctionComponent<IModelLoaderProps> = ({ modelFileName }) => {
    // const [gltf, set] = React.useState();

    // React.useMemo(() => {

    //     new GLTFLoader().load(`/assets/models/${modelFileName}.gltf`, function (gltf) {
    //         gltf.scene.traverse(function (node) {

    //             if ((node as any).isMesh) {
    //                 node.castShadow = true;
    //                 node.receiveShadow = true;

    //             }

    //         });
    //         set(gltf as any) as any
    //     })

    // }, [modelFileName])
    return (
        // <Suspense fallback={<h1>Loading</h1>}>
        //     {gltf && <primitive object={(gltf as any).scene} scale={1} />}
        // </Suspense>
        <BoxModel2 />
    )
};