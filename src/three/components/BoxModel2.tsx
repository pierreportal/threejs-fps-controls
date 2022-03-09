
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useConvexPolyhedron } from '@react-three/cannon';
import { Geometry } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

function toConvexProps(bufferGeometry: any) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  geo.mergeVertices();
  return [geo.vertices.map((v) => [v.x, v.y, v.z]), geo.faces.map((f) => [f.a, f.b, f.c]), []];
}

export function BoxModel2(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/assets/models/boxModel3.gltf") as GLTFResult;

  const geo = React.useMemo(() => toConvexProps((nodes.Cube as any).geometry), [nodes]);

  const [ref] = useConvexPolyhedron(() => ({ type: 'Static', mass: 1, args: geo as any }));

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0.2, 0]}
        scale={[3.5, 0.2, 3.5]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/boxModel3.gltf");