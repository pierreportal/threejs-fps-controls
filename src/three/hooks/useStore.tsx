import React from 'react';
import create from 'zustand';

export const useStore = create((set: any) => ({
    playerPosition: [0, 10, 0],
    setPlayerPosition: (playerPosition: any) => set(() => ({ playerPosition }))
}))