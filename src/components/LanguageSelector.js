import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    state = { language: "English" };
    static contextType = LanguageContext;

    getText = () => {
        return this.state.language === "English" ? "Select a language: " : "भाषा चुनें: ";
    };

    onLanguageChange = (lang) => {
        this.setState({ language: lang });
        this.context.onLanguageChange(lang);
    };

    render() {
        return (
            <React.Fragment>
                <label> {this.getText()}</label>
                <i className="flag us" onClick={() => this.onLanguageChange('English')} />
                <i className="flag in" onClick={() => this.onLanguageChange('Hindi')} />
            </React.Fragment >
        );
    }
};

export default LanguageSelector;