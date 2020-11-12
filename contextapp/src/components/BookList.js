import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className='book-list'
//         style={{ color: theme.syntax, background: theme.bg }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>the way of kings</li>
//           <li style={{ background: theme.ui }}>the name of the wind</li>
//           <li style={{ background: theme.ui }}>the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

const BookList = () => {
  // is going to provide the context object
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  // we can use the useContext hook as many times as we want inside a functional component to consume as many different contexts as we want
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
