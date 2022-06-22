import React from 'react';
import { Loading, Button } from '../UIkit';
import { UserInputMail, SuccessMessage } from './styles';
import emailjs from '@emailjs/browser';

interface IMailScreenProps {
    quit: (event: any) => void;
}

export const MailScreen: React.FunctionComponent<IMailScreenProps> = ({ quit }) => {
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');

    const [feedback, setFeedback] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);

    const [nameError, setNameError] = React.useState<boolean>(false);
    const [emailError, setEmailError] = React.useState<boolean>(false);
    const [messageError, setMessageError] = React.useState<boolean>(false);

    const nameInputRef = React.useRef(null);

    const formRef = React.useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            process.env.REACT_APP_MAIL_SERVICE_ID as string,
            process.env.REACT_APP_MAIL_TEMPLATE_ID as string,
            formRef.current as any,
            process.env.REACT_APP_MAIL_PUBLIC_KEY as string
        )
            .then((result) => {
                setFeedback(true);
                setTimeout(() => {
                    quit(e);
                }, 1000);
            }, (error) => {
                // console.log(error.text);
            });
    };

    const handleName = (event: any) => {
        setMessageError(false)
        setEmailError(false)
        setNameError(false)
        const { value } = event.target;
        setName(value);
    };
    const handleEmail = (event: any) => {
        setMessageError(false)
        setEmailError(false)
        setNameError(false)
        const { value } = event.target;
        setEmail(value);
    };
    const handleMessage = (event: any) => {
        setMessageError(false)
        setEmailError(false)
        setNameError(false)
        const { value } = event.target;
        setMessage(value);
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();

        let err = 0;

        if (!name.trim().length) {
            setNameError(true);
            err += 1;
        }
        if (!email.trim().length) {
            setEmailError(true);
            err += 1;
        }
        if (!message.trim().length) {
            setMessageError(true);
            err += 1;
        }
        if (err === 3) {
            return quit(event);
        }
        return !err && sendEmail(event)
    };

    React.useEffect(() => {
        (nameInputRef.current as any)?.focus();
    }, [])

    const handleKeys = (e: any) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            quit(e);
        }
        // TODO: prevent closing eyes
    };

    const hasContent = !!name.trim().length || !!email.trim().length || !!message.trim().length

    return <>
        {feedback && <SuccessMessage>Thank you :)</SuccessMessage>}
        {loading ? <Loading /> : !feedback && <UserInputMail onKeyDown={handleKeys} nameError={nameError} messageError={messageError} emailError={emailError}>
            <form ref={formRef as any} onSubmit={handleSubmit}>
                <input ref={nameInputRef} name="from_name" id="from_name" type="text" placeholder="Your name" value={name} onChange={handleName} />
                <input name="from_email" id="from_email" type="text" placeholder="Your email" value={email} onChange={handleEmail} />
                <textarea rows={10} cols={50} name="message" id="message" placeholder="Write me a message" value={message} onChange={handleMessage}></textarea>
                {hasContent && <Button primary type="submit">Send</Button>}
                <span><code>[Esc]</code> to cancel</span>
            </form>
        </UserInputMail>}
    </>
};