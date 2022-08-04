import React from 'react';
import './App.css';
import { BigCards } from './components/sections/BigCards';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
import { SearchPage } from './pages/search';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BookPage />
      </div>
    </div>
  );
}

export default App;
