import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderValue = lang => lang === 'English' ? "Submit" : "प्रस्तुत";

    renderButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {lang => this.renderValue(lang)}
                </LanguageContext.Consumer>
            </button>
        );
    }
    render() {
        return (
            <ColorContext.Consumer>
                {
                    (color) => this.renderButton(color)                        
                }
            </ColorContext.Consumer>
        );
    };
}

export default Button;