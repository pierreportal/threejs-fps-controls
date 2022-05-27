import styled from 'styled-components';

interface IGenericScreenProps {
    step: number
}

const getPos = (step: number) => {
    switch (step) {
        case 0:
            return `
                top: 50px;
                left: 50px;
            `
        case 1:
            return `
                bottom: 50px;
                right: 50px;
                text-align: right;
            `
        case 2:
            return `
                top: 50px;
                right: 50px;
                text-align: right;
            `
        case 3:
            return `
                bottom: 50px;
                left: 50px;
            `
        default:
            return `
                top: 50px;
                left: 50px;
            `
    }
}
export const GenericScreen = styled.div`
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    position:absolute;
    z-index:9;
    color:white;
    mix-blend-mode: difference;

    & > h1 {
        position: absolute;
        ${({ step }: IGenericScreenProps) => getPos(step)};
    }
`;

export const H1Span = styled.span`
    font-size: 20px;
`;