import React from 'react';
import { Search } from '../../components/elements/Search';
import { Subscribe } from '../../components/elements/Subscribe';
import { Footer } from '../../layouts/components/footer';
import { Header } from '../../layouts/components/header';
import books from '../../Data/Data';
import { BigCards } from '../../components/sections/BigCards';

const oneBook = books.slice(0, 1);

const BookPage = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export { BookPage };
