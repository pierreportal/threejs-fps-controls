import create from 'zustand';
import { UserInputMode } from './useLockControls';

interface ITooltip {
    heading: string
    text: string
    position: [x: number, y: number, z: number]
}

enum AppNotification {
    info = 'info',
    tip = 'tip',
    error = 'error',
    success = 'success'
}
export interface INotification {
    type: AppNotification
    content: string
}

export const useStore = create((set: any) => ({

    camera: null,
    setCamera: (camera: any) => {
        return set((state: any) => state.camera = camera);
    },

    playGeneric: false,

    setPlayGeneric: (mode: boolean) => {
        return set((state: any) => state.playGeneric = mode);
    },

    userInputMode: null as UserInputMode | null,

    setUserInputMode: (mode: UserInputMode | null) => {
        return set((state: any) => state.userInputMode = mode);
    },

    freePointerEyesOpen: false,

    setFreePointerEyesOpen: (mode: boolean) => {
        return set((state: any) => state.freePointerEyesOpen = mode);
    },

    pointingObjectForDistance: null as any,

    setPointingObjectForDistance: (position: any) => {
        return set((state: any) => state.pointingObjectForDistance = position);
    },

    enableControls: false as false | Array<number>,

    setEnableControls: (mode: false | Array<number>) => {
        return set((state: any) => state.enableControls = mode);
    },

    tooltip: null as ITooltip | null,

    setTooltip: (tolltip: ITooltip | null) => {
        return set((state: any) => state.tooltip = tolltip);
    },

    userInstruction: null as ITooltip | null,

    setUserInstruction: (userInstruction: string | null) => {
        if (userInstruction) {
            document.getElementById('user-instruction')!.classList.add('visible');
            return set((state: any) => state.userInstruction = userInstruction);
        } else {
            document.getElementById('user-instruction')!.classList.remove('visible');
            return set((state: any) => state.userInstruction = null);
        }
    },

    notification: null as INotification | null,

    setNotification: (notification: INotification | null) => {
        return set((state: any) => state.notification = notification);
    },

    mainTitle: 'About' as string,

    setMainTitle: (mainTitle: string) => {
        return set((state: any) => state.mainTitle = mainTitle);
    },

    secondHeading: null as string | null,

    setSecondHeading: (secondHeading: string | null) => {
        return set((state: any) => state.secondHeading = secondHeading)
    },

    navigationZone: false,

    setNavigationZone: (mode: boolean) => {
        return set((state: any) => state.navigationZone = mode)
    },

    navigateByPlayerMoves: false,

    setNavigateByPlayerMoves: (mode: boolean) => {
        return set((state: any) => state.navigateByPlayerMoves = mode)
    },

    subtitle: null as string | null,

    setSubtitle: (subtitle: string | null) => {
        if (subtitle) {
            document.getElementById('subtitle')!.classList.add('visible');
            return set((state: any) => state.subtitle = subtitle);
        } else {
            document.getElementById('subtitle')!.classList.remove('visible');
            return set((state: any) => state.subtitle = null);
        }
    },
}));