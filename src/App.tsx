import React from 'react';
import { Header } from './layouts/components/header/Header';
import './App.css';
import { Subscribe } from './components/elements/Subscribe';
import { Footer } from './layouts/components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
