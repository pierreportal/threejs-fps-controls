import { useInterval } from './useInterval';
import { useStore } from './useStore';

export const mapPosToRoute = (pos: any) => {
    const { x, y, z } = pos;
    if (x <= -7) {
        return 'Portfolio';
    } else if (x > -7) {
        return 'About';
    }
}

export const usePlayerRouting = (playerPosition: any) => {
    const { setMainTitle, mainTitle } = useStore();
    useInterval(() => {
        const currentPage = mapPosToRoute(playerPosition);
        currentPage && mainTitle !== currentPage && setMainTitle(currentPage);
    }, 500);
};