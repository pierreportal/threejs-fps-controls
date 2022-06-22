import styled from 'styled-components';
import { Column } from '../UIkit';


interface IUserInputMailProps {
    nameError: boolean;
    messageError: boolean;
    emailError: boolean
}
export const UserInputMail = styled(Column)`
    & > form {
        display:flex;
        flex-direction:column;
        & > input, textarea, button {
            padding: 0.5rem;
            border: none
        }
        & > input[name="from_name"] {
            border: ${({ nameError }: IUserInputMailProps) => nameError ? 'solid 1px red' : 'none'};
            background-color: ${({ nameError }: IUserInputMailProps) => nameError ? 'tomato' : 'white'};
        }
        & > input[name="from_email"] {
            border: ${({ emailError }: IUserInputMailProps) => emailError ? 'solid 1px red' : 'none'};
            background-color: ${({ emailError }: IUserInputMailProps) => emailError ? 'tomato' : 'white'};
        }
        & > textarea {
            border: ${({ messageError }: IUserInputMailProps) => messageError ? 'solid 1px red' : 'none'};
            background-color: ${({ messageError }: IUserInputMailProps) => messageError ? 'tomato' : 'white'};
        }
        & > input[name="from_name"], input[name="from_email"], textarea {
            border-bottom: solid 1px black;
            color: blue;
            transition: background-color .3s ease;
        }
        & > input:focus, textarea:focus {
            background-color: lightpink;
            outline: none;
        }
        & > button {
            position:absolute;
            width: 80px;
            background-color: aqua;
            height: 30px;
            top: calc(50% - 15px);
            left: calc(50% - 40px);
            border-radius: 5px;
            opacity:0.3;
            border: none;
            transition: opacity .3s ease;
            &:hover {
                opacity:1;
            }
        }
    }
`;

export const ErrorMessage = styled.p`
    position:absolute;
    top: -50px;
    color: red;
    font-weight: bold;
`;

export const SuccessMessage = styled.div`
    width: 100%;
    top: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;    
    color: aqua;
    font-weight: bold;
`;