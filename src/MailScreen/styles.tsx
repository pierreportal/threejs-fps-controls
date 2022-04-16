import styled from 'styled-components';
import { Column } from '../UIkit';


interface IUserInputMailProps {
    nameError: boolean;
    messageError: boolean;
}
export const UserInputMail = styled(Column)`
    & > form {
        display:flex;
        flex-direction:column;
        & > input, textarea, button {
            padding: 0.5rem;
            border: none
        }
        & > input {
            border: ${({ nameError }: IUserInputMailProps) => nameError ? 'solid 1px red' : 'none'};
            background-color: ${({ nameError }: IUserInputMailProps) => nameError ? 'tomato' : 'white'};
        }
        & > textarea {
            border: ${({ messageError }: IUserInputMailProps) => messageError ? 'solid 1px red' : 'none'};
            background-color: ${({ messageError }: IUserInputMailProps) => messageError ? 'tomato' : 'white'};
        }
        & > input, textarea {
            border-bottom: solid 1px black;
            color: blue;
            transition: background-color .3s ease;
        }
        & > input:focus, textarea:focus {
            background-color: lightpink;
            outline: none;
        }
        & > button {
            border: none
        }
    }
`;

export const ErrorMessage = styled.p`
    position:absolute;
    top: -50px;
    color: red;
    font-weight: bold;
`;