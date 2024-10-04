import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BookContext } from '../../BookContext/BookContext';

const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(BookContext);

  return (
    <header className="header">
        <Link to="/"><div className="header-title">Books</div></Link>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Link to="/mylibrary" className="my-library-link"><div className="library-name ">My Library</div></Link>
    </header>
  );
};

export default Header;
