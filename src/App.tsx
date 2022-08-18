import React from 'react';
import s from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BigCards } from './components/sections/BigCards';
import { BookPage } from './pages/book';
import { FavoritesPage } from './pages/favorites';
import { MainPage } from './pages/main';
import { SearchPage } from './pages/search';
import { YouCart } from './pages/yourcart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={s.container}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="cart" element={<YouCart />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="favorite" element={<FavoritesPage />} />
            <Route path="book:id" element={<BookPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
