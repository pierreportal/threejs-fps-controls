import React from 'react';
import { CLI, UnknownCMD, Prompt, QuitScreenButton, PrintLine } from './styles';
import { enterCmd } from './cliCtr';

interface ICLIScreenProps {
    quit: (event: any) => void;
}

interface ICLIPrint {
	cmd: string
	fb: string
	output?: any
}


export const CLIScreen: React.FunctionComponent<ICLIScreenProps> = ({ quit }) => {

    const [location, setLocation] = React.useState<string>('~/Users/pierreportal');

    const [inputValue, setInputValue] = React.useState<string>('');

    const [history, setHistory] = React.useState<Array<ICLIPrint>>([]);

    const cliInput = React.useRef(null);

    const handleValue = (event: any) => setInputValue(event.target.value);

    const handleFocus = () => (cliInput?.current as any)?.focus();

    React.useEffect(() => (cliInput?.current as any)?.focus(), [cliInput]);

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

        switch (key) {
			case 'Enter':
			enterCmd(location, value, (c:any) => setHistory([...history, { cmd: value, fb: c }]));
                setInputValue('');
        }
    };

    return <CLI onClick={handleFocus}>
        <QuitScreenButton onClick={quit}>
            Leave computer
        </QuitScreenButton>
		<code>
            {history.map((h: any, i: number) => <PrintLine key={i}>
                {
                    h.fb === 'unknown'
                        ? <UnknownCMD>{`Unknown command "${h.cmd}"`}</UnknownCMD>
					: <>
					<Prompt>{location}$</Prompt> {h.cmd}
					{h.output}
				</>
                }
			</PrintLine>
            )}
            <Prompt>
                {location}${' '}
            </Prompt>
            <input
                ref={cliInput}
                value={inputValue}
                onChange={handleValue}
                type="text"
                onKeyDown={handleKeys}
            />
        </code>
    </CLI>
}
