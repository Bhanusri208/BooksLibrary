import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import './App.css';
import { BookProvider } from './BookContext/BookContext';
import BookDetailsPage from './components/BookDetailsPage/BookDetailsPage';
import MyLibraryPage from './components/MyLibraryPage/MyLibraryPage';

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/mylibrary" element={<MyLibraryPage />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
