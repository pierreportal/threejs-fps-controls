import styled, { keyframes } from 'styled-components'


export const Instructions = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    position:absolute;
    width: 100vw;
    z-index:9;
    bottom:20px;
    padding: 0 20px;
    color: cyan
`

export const LoadingPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface IProgressRingCircleProps {
    prog: number,
    radius: number
}

const fadeIn = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`;

export const ProgressRingCircle = styled.svg`
    z-index: 9;
    position: absolute;
    border-radius:50%;
    & circle {
        r: ${(props: IProgressRingCircleProps) => props.radius};
        stroke-dasharray: ${(props: IProgressRingCircleProps) => `${props.radius * 2 * Math.PI} ${props.radius * 2 * Math.PI}`};
        stroke-dashoffset: ${(props: IProgressRingCircleProps) => props.prog};
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        color: red;
        stroke: white;
        stroke-width: 10;
        fill: transparent;
    }
`;





export const ComeInButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: rgb(255, 255, 255);
    font-weight: bold;
    position: absolute;
    z-index: 9;
    font-size: 20px;
    border-bottom: solid 2px rgb(255, 255, 255);
    padding: 5px 0;
    animation-name: ${fadeIn};
    animation-duration: 1s;
    animation-iteration-count: 1;
`;
