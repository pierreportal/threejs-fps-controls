import React from 'react';
import { CLI, UnknownCMD, Prompt, QuitScreenButton } from './styles';
import { ls, cd, openFile } from './cliCtr';

interface ICLIScreenProps {
    quit: (event: any) => void;
}

const keyWords = ['cd', 'ls', 'clear', 'pwd'];
const navCmds = ['.', '..', '/', ''];

const allowedCMD = [...keyWords, ...navCmds];

export const CLIScreen: React.FunctionComponent<ICLIScreenProps> = ({ quit }) => {

    const [location, setLocation] = React.useState<string>('~/User/pierre.portal');

    const [inputValue, setInputValue] = React.useState<string>('');

    const [history, setHistory] = React.useState<Array<any>>([]);

    const cliInput = React.useRef(null);

    const handleValue = (event: any) => setInputValue(event.target.value);

    const handleFocus = () => (cliInput?.current as any)?.focus();

    React.useEffect(() => (cliInput?.current as any)?.focus(), [cliInput]);

    const execute = (cmd: string, event: any) => {
        switch (cmd) {
            case 'clear':
                setHistory([]);
                break;
            case 'pwd':
                setHistory([...history, { cmd: location, fb: 'ok' }]);
                break;
        }
    };

    const handleKeys = (event: any) => {
        const { key, ctrlKey } = event;
        const { value } = event.target;

        if (ctrlKey) {
            switch (key) {
                case 'c':
                    setHistory([...history, { cmd: value, fb: 'abort' }]);
                    setInputValue('');
                    break
            }
        };

        if (inputValue === 'cd ') {
            cd(location)
        };

        switch (key) {
            case 'Enter':
                if (!allowedCMD.includes(value)) {
                    setHistory([...history, { cmd: value, fb: 'ok' }, { cmd: value, fb: 'unknown' }]);

                } else {
                    setHistory([...history, { cmd: value, fb: 'ok' }]);
                    execute(value, event);
                }
                setInputValue('');
                break
        }
    };

    return <CLI onClick={handleFocus}>
        <QuitScreenButton onClick={quit}>
            Leave computer
        </QuitScreenButton>
        <code>
            {history.map((h: any, i: number) => <div key={i}>
                {
                    h.fb === 'unknown'
                        ? <UnknownCMD>{`Unknown command "${h.cmd}"`}</UnknownCMD>
                        : <><Prompt>{location}$</Prompt> {h.cmd}</>
                }
            </div>
            )}
            <Prompt>
                {location}${' '}
            </Prompt>
            <input
                style={{
                    color: !!inputValue.length && !allowedCMD.includes(inputValue) ? 'red' : 'inherit'
                }}
                ref={cliInput}
                value={inputValue}
                onChange={handleValue}
                type="text"
                onKeyDown={handleKeys}
            />
        </code>
    </CLI>
}