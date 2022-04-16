import styled from 'styled-components'

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