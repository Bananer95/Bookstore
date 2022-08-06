import React from 'react';
import { Subscribe } from '../../components/elements/Subscribe';
import { Footer } from '../../layouts/components/footer';
import { Header } from '../../layouts/components/header';
import books from '../../Data/Data';
import { BigCards } from '../../components/sections/BigCards';
import { ButtonBack } from '../../components/elements/ButtonBack';
import { Cards } from '../../components/sections/Cards';
import s from './BookPage.module.scss';

const oneBook = books.slice(0, 1);
const threeBook = books.slice(0, 3);

const BookPage = () => {
  return (
    <>
      <Header />
      <ButtonBack />
      {oneBook.map((book) => {
        return (
          <BigCards
            img={book.img}
            title={book.title}
            authors={book.authors}
            publisher={book.publisher}
            price={book.price}
            language={book.language}
            format={book.format}
          />
        );
      })}

      <Subscribe />
      <div className={s.similar_books}>
        <h4 className={s.h4}>Similar Books</h4>
        <div className={s.similar_books_row}>
          {threeBook.map((book) => {
            return (
              <Cards
                img={book.img}
                title={book.title}
                authors={book.authors}
                price={book.price}
                publisher={book.publisher}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export { BookPage };
