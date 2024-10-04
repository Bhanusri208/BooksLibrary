import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../../BookContext/BookContext';
import './HomePage.css';

const HomePage = () => {
  const { books, addBookToLibrary } = useContext(BookContext);

  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map(book => (
          <div key={book.id} className="book-card">
            <Link to={`/book/${book.id}`} state={{ book }} className="book-link">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author"><strong>Author:</strong> {book.author}</p>
              <p className="book-genre"><strong>Genre:</strong> {book.genre}</p>
              <p className="book-rating"><strong>Rating:</strong> {book.rating}</p>
              <p className="book-year"><strong>Publication Year:</strong> {book.publication_year}</p>
              <p className="book-description">{book.description}</p>
            </Link>
            <button className="add-button" onClick={() => addBookToLibrary(book)}>
              Add to Library
            </button>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default HomePage;



