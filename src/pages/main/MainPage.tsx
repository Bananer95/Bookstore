import React from 'react';
import { Header } from '../../layouts/components/header/Header';
import { Subscribe } from '../../components/elements/Subscribe/Subscribe';
import { Footer } from '../../layouts/components/footer/Footer';
import books from '../../Data/Data';
import { Cards } from '../../components/sections/Cards';
import './Mainpage.css';
import { useState } from 'react';

const booksFirstPage = books.slice(0, 12);
const booksSecondPage = books.slice(12, 24);
const booksThiedPage = books.slice(24, 36);

const MainPage = () => {
  const [page, setPage] = useState(1);

  if (page > 3) {
    setPage(1);
  }

  const handleChanger = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header />
      <div className="mainpage">
        {page === 1
          ? booksFirstPage.map((book) => {
              return (
                <Cards
                  key={book.id}
                  img={book.img}
                  title={book.title}
                  authors={book.authors}
                  publisher={book.publisher}
                  price={book.price}
                />
              );
            })
          : page === 2
          ? booksSecondPage.map((book) => {
              return (
                <Cards
                  key={book.id}
                  img={book.img}
                  title={book.title}
                  authors={book.authors}
                  publisher={book.publisher}
                  price={book.price}
                />
              );
            })
          : page === 3
          ? booksThiedPage.map((book) => {
              return (
                <Cards
                  key={book.id}
                  img={book.img}
                  title={book.title}
                  authors={book.authors}
                  publisher={book.publisher}
                  price={book.price}
                />
              );
            })
          : null}
        <button onClick={handleChanger}> Next</button>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export { MainPage };
