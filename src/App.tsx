import React from 'react';
import s from './App.module.scss';
import { BigCards } from './components/sections/BigCards';
import { BookPage } from './pages/book';
import { FavoritesPage } from './pages/favorites';
import { MainPage } from './pages/main';
import { SearchPage } from './pages/search';
import { YouCart } from './pages/yourcart';

function App() {
  return (
    <div className="App">
      <div className={s.container}>
        <FavoritesPage />
      </div>
    </div>
  );
}

export default App;
