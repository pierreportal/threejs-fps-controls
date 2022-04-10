/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sphere001: THREE.Mesh
    Sphere002: THREE.Mesh
    Sphere003: THREE.Mesh
    Sphere004: THREE.Mesh
  }
  materials: {}
}

export default function SculpTestC({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/assets/models/test-sculpture3.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Sphere001.geometry} material={nodes.Sphere001.material} position={[-0.01, 0.34, -0.03]} scale={0.26} />
      <mesh castShadow receiveShadow geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[0.05, 0.65, -0.05]} scale={0.15} />
      <mesh castShadow receiveShadow geometry={nodes.Sphere003.geometry} material={nodes.Sphere003.material} position={[0.2, 0.16, -0.04]} scale={0.18} />
      <mesh castShadow receiveShadow geometry={nodes.Sphere004.geometry} material={nodes.Sphere004.material} position={[-0.17, 0.35, -0.17]} scale={0.15} />
    </group>
  )
}

useGLTF.preload('/assets/models/test-sculpture3.gltf')