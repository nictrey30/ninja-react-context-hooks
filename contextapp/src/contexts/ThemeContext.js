import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee'
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555'
    }
  };
  // the function needs to be here because we might pass this function down to other components that want to interact with th state and change the theme
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    // value -> take in whatever data we want to provide to the components that the ThemeContext Provider wraps
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {/* the children that ThemeContextProvider comonent wraps */}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
