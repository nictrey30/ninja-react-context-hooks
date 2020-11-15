import { v1 as uuidv1 } from 'uuid';
// it reduces all our function that we manipulate our state(in this case, addBook and removeBook) into a single function
export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      // the books are represented by state
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuidv1()
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
