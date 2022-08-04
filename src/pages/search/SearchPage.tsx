import React from 'react';
import s from './SearchPage.module.scss';
import { Header } from '../../layouts/components/header';
import { Footer } from '../../layouts/components/footer';
import books from '../../Data/Data';
import { Cards } from '../../components/sections/Cards';
import { Row } from '../../components/elements/row';

const booksFirstPage = books.slice(0, 12);

const SearchPage = () => {
  return (
    <>
      <Header />
      <h1>{} SEARCH RESULTS</h1>
      <p className={s.p}>Found {} books</p>
      <div className={s.searchpage}>
        {booksFirstPage
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
          : null}
      </div>
      <Row />
      <Footer />
    </>
  );
};

export { SearchPage };
