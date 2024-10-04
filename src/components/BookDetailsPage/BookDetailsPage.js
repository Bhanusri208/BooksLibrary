import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BookContext } from '../../BookContext/BookContext';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const location = useLocation();
  const book = location.state?.book; 
  const { removeBookFromLibrary } = useContext(BookContext);

  if (!book) {
    return <p>No book found!</p>;
  }

  return (
    <div className="book-details">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author"><strong>Author:</strong> {book.author}</p>
      <p className="book-genre"><strong>Genre:</strong> {book.genre}</p>
      <p className="book-rating"><strong>Rating:</strong> {book.rating}</p>
      <p className="book-year"><strong>Publication Year:</strong> {book.publication_year}</p>
      <p className="book-description">{book.description}</p>
    </div>
  );
};

export default BookDetailsPage;





