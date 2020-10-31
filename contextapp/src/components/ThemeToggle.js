// the purpose of this component is just to output a button that user can click it to change the theme
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    // console.log(this.context); -> it is the state of ThemeContext
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle the theme</button>;
  }
}
export default ThemeToggle;
