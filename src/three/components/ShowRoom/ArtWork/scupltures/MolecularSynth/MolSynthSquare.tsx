/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export function Square({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/assets/models/mol-synth-square.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[0.85, 1, 0]} scale={[0.15, 1, 0.15]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.Material} position={[-0.85, 1, 0]} scale={[0.15, 1, 0.15]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} position={[0, 0.15, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.15, 1, 0.15]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.Material} position={[0, 1.85, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.15, 1, 0.15]} />
    </group>
  )
}

useGLTF.preload('/assets/models/mol-synth-square.gltf')
