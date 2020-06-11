import React, { Component } from 'react';
import UserCreate from '../components/UserCreate';

class App extends Component {
  state = {
    language: 'English',
  };

  onLanguageChange = (language) => {
    this.setState({
      language,
    });
  };
  render() {
    return (
      <div className="ui-container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('English')}
          />
          <i
            className="flag pl"
            onClick={() => this.onLanguageChange('Polish')}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
