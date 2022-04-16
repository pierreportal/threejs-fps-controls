import React from 'react';
import { Row, Button } from '../UIkit';
import { UserInputMail, ErrorMessage } from './styles';
import emailjs from '@emailjs/browser';
// require('dotenv').config()
const { MAIL_PUBLIC_KEY, MAIL_SERVICE_ID, MAIL_TEMPLATE_ID } = process.env;

interface IMailScreenProps {
    quit: (event: any) => void;
}

export const MailScreen: React.FunctionComponent<IMailScreenProps> = ({ quit }) => {
    const [name, setName] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');

    const [nameError, setNameError] = React.useState<boolean>(false);
    const [messageError, setMessageError] = React.useState<boolean>(false);

    const nameInputRef = React.useRef(null);

    const formRef = React.useRef();
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_MAIL_SERVICE_ID as string,
            process.env.REACT_APP_MAIL_TEMPLATE_ID as string,
            formRef.current as any,
            process.env.REACT_APP_MAIL_PUBLIC_KEY as string
        )
            .then((result) => {
                console.log(result.text);
                quit(e)
            }, (error) => {

                console.log(error.text);
            });
    };

    const handleName = (event: any) => {
        setMessageError(false)
        setNameError(false)
        const { value } = event.target;
        setName(value);
    };
    const handleMessage = (event: any) => {
        setMessageError(false)
        setNameError(false)
        const { value } = event.target;
        setMessage(value);
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!name.trim().length) {
            setNameError(true);
        }
        if (!message.trim().length) {
            setMessageError(true);
        }
        console.log(name, message);
        sendEmail(event)
    };

    React.useEffect(() => {
        (nameInputRef.current as any)?.focus();
    }, [])

    const error = nameError && messageError ? 'You need to provide a name and type your message.' : nameError ? 'You need to give a name.' : messageError ? 'You need to type a message' : null

    return <UserInputMail nameError={nameError} messageError={messageError}>
        <form ref={formRef as any} onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <input ref={nameInputRef} name="from_name" id="from_name" type="text" placeholder="Your name" value={name} onChange={handleName} />
            <textarea rows={10} cols={50} name="message" id="message" placeholder="Write me a message" value={message} onChange={handleMessage}></textarea>
            <Row>
                <Button primary type="submit">Send</Button>
                <Button secondary onClick={quit}>Cancel</Button>
            </Row>
        </form>
    </UserInputMail>
};