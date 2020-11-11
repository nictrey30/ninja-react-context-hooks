import React, { useState, useEffect } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=''>Song name:</label>
      <input
        type='text'
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input type='submit' value='add song' />
    </form>
  );
};

export default NewSongForm;
