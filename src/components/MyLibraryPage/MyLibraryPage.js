import React, { useContext } from 'react';
import { BookContext } from '../../BookContext/BookContext'; 
import './MyLibraryPage.css';

const MyLibraryPage = () => {
    const { library, removeBookFromLibrary } = useContext(BookContext);

    return (
        <div className="my-library">
            <h1>My Library</h1>
            {library.length === 0 ? (
                <p>No books in your library.</p>
            ) : (
                <ul>
                    {library.map((book) => (
                        <li key={book.id}>
                            {book.title}
                            <button onClick={() => removeBookFromLibrary(book.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyLibraryPage;
