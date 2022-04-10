/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh
  }
  materials: {}
}

export default function SculpTestB({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/assets/models/test-sculpture2.gltf') as GLTFResult;
  const EM = 0.06;
  (nodes.Sphere.material as any).metalness = 2;
  (nodes.Sphere.material as any).color = { r: 1, g: 1, b: 1 };
  (nodes.Sphere.material as any).emissive = { r: EM, g: EM, b: EM };

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[0, 0.51, 0]} scale={[0.22, 0.23, 0.18]} />
    </group>
  )
}

useGLTF.preload('/assets/models/test-sculpture2.gltf')