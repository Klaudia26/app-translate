import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === 'english' ? 'Name' : 'Imię';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
