import React, { createContext, useState, useReducer } from 'react';

const AgeContext = createContext();

const ageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    case 'ADD_Five':
      return state + 5;
    case 'ADD_NUM':
      return state + action.num;
    default:
      return state;
  }
};

const AgeContextProvider = (props) => {
  // const [age, setAge] = useState(20);
  // const addOneToAge = () => setAge((prevAge) => prevAge + 1);
  // const addFiveToAge = () => setAge((prevAge) => prevAge + 5);
  // const addNumToAge = (num) => setAge((prevAge) => prevAge + num);

  // the dispatch is the function returned by the useReducer hook that we can use in the future to send our action to this ageReducer(the name of our reducer)
  const [age, dispatch] = useReducer(ageReducer, 20);

  return (
    <AgeContext.Provider value={(age, dispatch)}>
      {props.children}
    </AgeContext.Provider>
  );
};

export default AgeContextProvider;
