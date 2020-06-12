import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends Component {
  renderSubmit = (language) =>
    language === 'english' ? 'Submit' : 'Zatwierdź';

  renderColor = (color) => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({ language }) => this.renderSubmit(language)}
      </LanguageContext.Consumer>
    </button>
  );
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderColor(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
