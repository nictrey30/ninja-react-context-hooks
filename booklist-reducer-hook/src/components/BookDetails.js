import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    // we returning the details inside an ul tag
    <li onClick={() => removeBook(book.id)}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
};

export default BookDetails;
