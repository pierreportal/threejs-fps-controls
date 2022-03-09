import { useStore } from './useStore';

export const useTemporarySubtitle = () => {
    const { setSubtitle } = useStore();

    const display = (subtitle: string, delay: number) => {
        setSubtitle(subtitle);
        setTimeout(() => {
            setSubtitle(null);
        }, delay)
    }

    return display;
}