// a context for all the book data
import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // Lazy initialization
  // You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg)
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {/* props.children represents the components that BookContextProvider is going to wrap */}
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
