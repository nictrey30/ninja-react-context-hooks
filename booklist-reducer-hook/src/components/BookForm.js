import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`${title} - ${author}`);
    dispatch({ type: 'ADD_BOOK', book: { title, author } });
    setTitle('');
    setAuthor('');
  };
  return (
    <form action='' onSubmit={handleSubmit}>
      <input
        type='text'
        name=''
        id=''
        placeholder='book title'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        required
      />
      <input
        type='text'
        name=''
        id=''
        placeholder='book authoe'
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        required
      />
      <input type='submit' value='add book' />
    </form>
  );
};

export default NewBookForm;
