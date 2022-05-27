import React from 'react';
import { useThree } from 'react-three-fiber';
import * as THREE from 'three';

export const useRayCasting = (camera: any, planes: any) => {

    const onDocumentMouseMove = (event: any) => {

        var mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        var intersects = raycaster.intersectObjects(planes);

        console.log(planes, intersects)
        if (intersects.length > 0) {
            // $('html,body').css('cursor', 'pointer');
        } else {
            // $('html,body').css('cursor', 'default');
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousemove', onDocumentMouseMove);
        return () => document.removeEventListener('mousemove', onDocumentMouseMove);
    }, []);

}