import React from 'react';
import { useInterval } from '../three/hooks/useInterval';
import { GenericScreen, H1Span } from './styles';

const steps = [
    <h1>Design and development <br /><H1Span>by Pierre Portal</H1Span></h1>,
    <h1>Built with <em>React</em>, <em>threeJS</em>, <em>TypeScript</em></h1>,
    <h1>Original music <br /><H1Span>by Pierre Portal</H1Span></h1>,
    <h1>Thank you for visiting</h1>,
];

const parse2Text = (element: any) => {
    if (typeof element === 'string') {
        return element;
    }
    return element.map((el: any) => {
        if (typeof el === 'string') {
            return el;
        }
        return el.props.children ? parse2Text(el.props.children) : ''
    }).join(' ');
}

export const Generic: React.FunctionComponent = () => {

    const [currentStep, setCurrentStep] = React.useState<number>(0);

    useInterval(() => setCurrentStep((currentStep + 1) % steps.length), parse2Text(steps[currentStep].props.children).length * 70)

    return <GenericScreen step={currentStep}>{steps[currentStep]}</GenericScreen>;
};