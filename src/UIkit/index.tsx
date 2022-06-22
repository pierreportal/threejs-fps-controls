import styled, { keyframes } from 'styled-components'

export const Row = styled.div`
    display: flex;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column
`;
interface IButtonProps {
    primary?: boolean
    secondary?: boolean
}
export const Button = styled.button`
    cursor: pointer;
    background-color: ${({ primary, secondary }: IButtonProps) => primary ? 'white' : secondary ? "grey" : 'white'};
    color: ${({ primary, secondary }: IButtonProps) => primary ? 'black' : secondary ? "white" : 'black'};
`;

const spin = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
     }
`;
export const Loading = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    animation-name: ${spin};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    &::after {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        border-radius: 50%;
        top: 0;
        left: 0;
        background-color: aqua;
    }
`;