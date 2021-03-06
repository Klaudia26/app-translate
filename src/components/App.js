import React, { Component } from 'react';
import UserCreate from '../components/UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from '../components/LanguageSelector';

class App extends Component {
  // state = {
  //   language: 'english',
  // };

  // onLanguageChange = (language) => {
  //   this.setState({
  //     language,
  //   });
  // };
  render() {
    return (
      <div className="ui-container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value={'red'}>
            {/* <LanguageContext.Provider value={this.state.language}> */}
            <UserCreate />
            {/* </LanguageContext.Provider> */}
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
