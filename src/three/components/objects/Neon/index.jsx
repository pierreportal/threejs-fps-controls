import * as THREE from 'three'
import React, { useEffect, useRef, useMemo } from 'react'
import { extend, useFrame, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

extend({ EffectComposer, RenderPass, UnrealBloomPass })

export function NeonEffect() {
    const composer = useRef()
    const { scene, gl, size, camera } = useThree()
    const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
    useEffect(() => void composer.current.setSize(size.width, size.height), [size])
    useFrame(() => composer.current.render(), 1)

    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
            <unrealBloomPass attachArray="passes" args={[aspect, 1, 1, 0]} strength={2} />
        </effectComposer>
    )
}