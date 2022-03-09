import create from 'zustand';

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

    pointingObjectForDistance: null as any,

    setPointingObjectForDistance: (position: any) => {
        return set((state: any) => state.pointingObjectForDistance = position);
    },

    displayTerminalWindow: false,

    setDisplayTerminalWindow: (mode: boolean) => {
        return set((state: any) => state.displayTerminalWindow = mode);
    },

    enableControls: false as false | Array<number>,

    setEnableControls: (mode: false | Array<number>) => {
        return set((state: any) => state.enableControls = mode);
    },

    tooltip: null as ITooltip | null,

    setTooltip: (tolltip: ITooltip | null) => {
        return set((state: any) => state.tooltip = tolltip);
    },

    notification: null as INotification | null,

    setNotification: (notification: INotification | null) => {
        return set((state: any) => state.notification = notification);
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