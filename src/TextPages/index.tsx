import React from 'react';
import { About } from './About';
import { Contact } from './Contact';


interface ITextPageProps {
    section: string
}

export const TextPage: React.FunctionComponent<ITextPageProps> = ({ section }) => {

    switch (section) {
        case 'About':
            return <div id="text-page">
                <About />
            </div>
        case 'Contact':
            return <div id="text-page">
                <Contact />
            </div>
        default:
            return <div id="text-page">
                {/* <About /> */}
            </div>
    }
}