// a context for all the book data
import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {/* props.children represents the components that BookContextProvider is going to wrap */}
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
