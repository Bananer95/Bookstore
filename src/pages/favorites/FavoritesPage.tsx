import React from 'react';
import { ButtonBack } from '../../components/elements/ButtonBack';
import { Header } from '../../layouts/components/header';
import books from '../../Data/Data';
import { Cards } from '../../components/sections/Cards';
import { Footer } from '../../layouts/components/footer';
import s from './FavoritesPage.module.scss';
import { BigCards } from '../../components/sections/BigCards';
import { CardsInBasket } from '../../components/sections/YourCards';

const threeBooks = books.slice(0, 3);
const twoBooks = books.slice(0, 2);
const oneBook = books.slice(0, 1);

const FavoritesPage = () => {
  return (
    <>
      <Header />
      <ButtonBack />
      <h3 className={s.h3}>Favorites</h3>
      {threeBooks.map((book) => {
        return (
          <CardsInBasket
            img={book.img}
            favorite={true}
            title={book.title}
            authors={book.authors}
            publisher={book.publisher}
            price={book.price}
          />
        );
      })}
      <h3 className={s.h4}>Popular Books</h3>
      <div className={s.favorite_book_popular}>
        {oneBook.map((book) => {
          return (
            <Cards
              img={book.img}
              title={book.title}
              authors={book.authors}
              publisher={book.publisher}
              price={book.price}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export { FavoritesPage };
