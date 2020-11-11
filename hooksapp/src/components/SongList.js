import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  // useState returns an array with 2 values: the actual data and the function that modify that data
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };
  useEffect(() => {
    // everything inside this arrow function is going to be executed every single time our App renders or updates if we don't pass the options-array
    console.log('useEffect hook ran', songs);
    // console.log(`the age is now ${age}`);
  });
  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button
        onClick={() => {
          // anytime you are modifying state where you actually are using the previous value of your state to create the new value, you need to use the function version for setting your state with prevValue
          setAge((prevAge) => prevAge + 1);
        }}
      >
        Add 1 to age: {age}
      </button>
    </div>
  );
};

export default SongList;
