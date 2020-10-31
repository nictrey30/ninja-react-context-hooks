import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

// Context API - share state within a component tree. Context is designed to share data that can be considered "global" for a tree of react components, such as current auth user, theme, or preffered language.

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
