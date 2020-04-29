import React from 'react';
import { connect } from 'react-redux';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = { language: 'English' };

    getText = () => {
        return this.state.language === "English" ? "Select a language: " : "भाषा चुनें: ";
    };

    render() {

        return (
            <div className="ui container">
                <div>
                    <label> {this.getText()}</label>
                    <i className="flag us" onClick={() => this.setState({ language: 'English' })} />
                    <i className="flag in" onClick={() => this.setState({ language: 'Hindi' })} />
                    <ColorContext.Provider value='red'>
                        <LanguageContext.Provider value={this.state.language}>
                            <UserCreate />
                        </LanguageContext.Provider>
                    </ColorContext.Provider>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(App);