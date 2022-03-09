import { METHODS } from "http";
import { Quaternion, Vector3 } from "three";
import { PLAYER_HEIGHT } from '../../../constants';

interface IcurrentInputController {
    leftButton: boolean
    rightButton: boolean
    mouseX: number
    mouseY: number
    mouseXDelta: number
    mouseYDelta: number
}

function clamp(x: any, a: any, b: any) {
    return Math.min(Math.max(x, a), b);
}

let pX: any = null;
let pY: any = null;

const SPEED = 0.2;
const HEAD_BANG_LEVEL = 0.2;

class InputController {

    public current_: IcurrentInputController | undefined;
    public previous_: any;
    public keys_: any;
    public previousKeys_: any;
    public domElement: any;
    public blockedDirecrtion_: any;

    constructor() {
        this.initialize_();
    }
    initialize_() {
        this.current_ = {
            leftButton: false,
            rightButton: false,
            mouseX: 0,
            mouseY: 0,
            mouseXDelta: 0,
            mouseYDelta: 0,
        };
        this.previous_ = null;
        this.keys_ = {};
        this.previousKeys_ = {};
        this.domElement = document;

        this.domElement.addEventListener('mousedown', (event: MouseEvent) => this.onMouseDown_(event));
        this.domElement.addEventListener('mouseup', (event: MouseEvent) => this.onMouseUp_(event));
        this.domElement.addEventListener('mousemove', (event: MouseEvent) => this.onMouseMove_(event));
        this.domElement.addEventListener('keydown', (event: KeyboardEvent) => this.onKeyDown_(event));
        this.domElement.addEventListener('keyup', (event: KeyboardEvent) => this.onKeyUp_(event));
    }

    onMouseDown_(event: MouseEvent) {
        const { button } = event;
        switch (button) {
            case 0:
                this.current_!.leftButton = true
                break;
            case 1:
                this.current_!.rightButton = true
                break;
        };
    };
    onMouseUp_(event: MouseEvent) {
        const { button } = event;
        switch (button) {
            case 0:
                this.current_!.leftButton = false
                break;
            case 1:
                this.current_!.rightButton = false
                break;
        };
    };
    onMouseMove_(event: MouseEvent) {

        const { movementX, movementY } = event;

        if (pX === null && pY === null) {
            pX = event.pageX;
            pY = event.pageY;
        };

        pX += movementX * 0.5;
        pY += movementY * 0.5;

        this.current_!.mouseX = pX - window.innerWidth / 2;
        this.current_!.mouseY = pY - window.innerHeight / 2;
        if (this.previous_ === null) {
            this.previous_ = { ...this.current_ };
        };
        this.current_!.mouseXDelta = this.current_!.mouseX - this.previous_.mouseX;
        this.current_!.mouseYDelta = this.current_!.mouseY - this.previous_.mouseY;
    };

    onKeyDown_(event: KeyboardEvent) {
        const { key } = event;
        this.keys_[key] = true;
    };
    onKeyUp_(event: KeyboardEvent) {
        const { key } = event;
        this.keys_[key] = false;
    };
    update() {
        this.previous_ = { ...this.current_ };
        console.log('prev:', this.previous_.mouseX);
        console.log('curr:', this.current_!.mouseX);

    };
};





export class FirstPersonCamera {
    public camera_: any;
    public input_: InputController;
    public rotation_: Quaternion;
    public translation_: Vector3;
    public phi_: number;
    public theta_: number;
    public headBobActive_: boolean;
    public headBobTimer_: number;
    public position: any;
    public player_: any;


    constructor(camera: any, position: any, playerRef: any) {
        console.log('init FPC')
        this.camera_ = camera;
        this.input_ = new InputController();
        this.rotation_ = new Quaternion();
        this.translation_ = new Vector3();
        this.phi_ = 0;
        this.theta_ = 0;
        this.headBobActive_ = false;
        this.headBobTimer_ = 0;
        // this.camera_.aspect = window.innerWidth / window.innerHeight;
        // this.camera_.updateProjectionMatrix();
        this.position = position;
        this.player_ = playerRef;
    }

    update() {
        // this.camera_.position.set(this.position[0], PLAYER_HEIGHT, this.position[2]);
        if (!document.pointerLockElement) return;
        this.updateRotation_();
        this.updateCamera_();
        // this.updateTranslation_();
        // this.updateHeadBob_();
        // console.log(this.camera_.rotation)
        return this.camera_.rotation
    }

    // updateTranslation_() {

    //     let [Pforward, Pleft, PforwardVelocity, PstrafeVelocity] = getVelocityVector(this.input_.keys_, 1, this.phi_);

    //     this.translation_.add(Pforward as any);
    //     this.translation_.add(Pleft as any);

    //     if (PforwardVelocity !== 0 || PstrafeVelocity !== 0) {
    //         this.headBobActive_ = true;
    //     }
    // }
    // updateHeadBob_() {
    //     if (this.headBobActive_) {
    //         const wavelength = Math.PI;
    //         const nextStep = 1 + Math.floor(((this.headBobTimer_ + 0.000001) * 10) / wavelength);
    //         const nextStepTime = nextStep * wavelength / 10;
    //         this.headBobTimer_ = Math.min(this.headBobTimer_ + 0.03, nextStepTime);

    //         if (this.headBobTimer_ === nextStepTime) {
    //             this.headBobActive_ = false;
    //         }
    //     }
    // }
    updateRotation_() {
        if (this.input_.previous_?.mouseX !== this.input_.current_?.mouseX) {
            const xh = this.input_.current_!.mouseXDelta / window.innerWidth;
            const yh = this.input_.current_!.mouseYDelta / window.innerHeight;

            this.phi_ += -xh * 1;
            this.theta_ = clamp(this.theta_ + -yh * 1, -Math.PI / 3, Math.PI / 3);

            const qx = new Quaternion();
            qx.setFromAxisAngle(new Vector3(0, 1, 0), this.phi_);
            const qz = new Quaternion();
            qz.setFromAxisAngle(new Vector3(1, 0, 0), this.theta_);

            const q = new Quaternion();
            q.multiply(qx);
            q.multiply(qz);

            this.rotation_.copy(q);
            this.input_.update()
        }
    }

    updateCamera_() {
        this.camera_.quaternion.copy(this.rotation_);
        // this.camera_.position.set(
        //     this.translation_.x + this.position[0],
        //     PLAYER_HEIGHT + HEAD_BANG_LEVEL * Math.sin(this.headBobTimer_ * 10) * 1.2,
        //     this.translation_.z + this.position[2]
        // );

    }
};


// export const getVelocityVector = (keys: any | null, v: number, phi: number) => {

//     let forwardVelocity = (keys?.w ? v : 0) + (keys?.s ? -v : 0);
//     let strafeVelocity = (keys?.a ? v : 0) + (keys?.d ? -v : 0);

//     const getForwardV = () => forwardVelocity

//     const qx = new Quaternion();
//     qx.setFromAxisAngle(new Vector3(0, 1, 0), phi);

//     const forward = new Vector3(0, 0, -1);
//     forward.applyQuaternion(qx);
//     forward.multiplyScalar(getForwardV() * SPEED);

//     const left = new Vector3(-1, 0, 0);
//     left.applyQuaternion(qx);
//     left.multiplyScalar(strafeVelocity * SPEED);

//     return [forward, left, forwardVelocity, strafeVelocity]
// }