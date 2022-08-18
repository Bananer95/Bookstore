import React, { useEffect } from 'react';
import { Header } from '../../layouts/components/header/Header';
import { Subscribe } from '../../components/elements/Subscribe/Subscribe';
import { Footer } from '../../layouts/components/footer/Footer';
import books from '../../Data/Data';
import { Cards } from '../../components/sections/Cards';
import s from './Mainpage.module.scss';
import { useState } from 'react';
import { Row } from '../../components/elements/row';
import { getBooksThunk } from '../../store/getBooksThunk';
import { useAppDispatch } from '../../store';
import { store } from '../../store/index';

// const booksFirstPage = books.slice(0, 12);
// const booksSecondPage = books.slice(12, 24);
// const booksThiedPage = books.slice(24, 36);

const MainPage = () => {
  const [page, setPage] = useState(1);

  if (page > 3) {
    setPage(1);
  }

  const handleChanger = () => {
    setPage(page + 1);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooksThunk());
    console.log(store);
  }, []);

  return (
    <>
      <Header />
      <h1 className={s.h1}>NEW RELEASES BOOKS</h1>
      <div className={s.mainpage}>
        {/* {page === 1
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
          : null} */}

        <Row />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export { MainPage };
