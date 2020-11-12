import React, { createContext, useState } from 'react';

export const BookContext = createContext();
// in a class component, the props are attached to this, but in a functional component we must pass them as arguments
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', id: 1 },
    { title: 'the way of kings', id: 2 },
    { title: 'the final empire', id: 3 },
    { title: 'the hero of ages', id: 4 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
