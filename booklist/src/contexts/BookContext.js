// a context for all the book data
import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrik rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 }
  ]);
  // add a book to the data
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv1() }]);
  };
  // remove a book from the data
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {/* props.children represents the components that BookContextProvider is going to wrap */}
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
