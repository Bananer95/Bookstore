import React from 'react';
import { ButtonBack } from '../../components/elements/ButtonBack';
import { Footer } from '../../layouts/components/footer';
import { Header } from '../../layouts/components/header';
import books from '../../Data/Data';
import { CardsInBasket } from '../../components/sections/YourCards';
import s from './YouCart.module.scss';
import { Button } from '../../components/elements/Button';

const threeBooks = books.slice(0, 3);

const YouCart = () => {
  return (
    <>
      <Header />
      <ButtonBack />
      <div className={s.your_cart}>
        <h4 className={s.h4}>Your Cart</h4>
        <div className={s.your_cart_row}>
          {threeBooks.map((book) => {
            return (
              <CardsInBasket
                img={book.img}
                title={book.title}
                authors={book.authors}
                publisher={book.publisher}
                price={book.price}
              />
            );
          })}
        </div>
        <div className={s.your_cart_sum}>
          <div className={s.you_cart_sum_sumtotal}>
            <span>Summa Total</span>
            {69}
          </div>
          <div className={s.you_cart_sum_vat}>
            <span>VAT</span>
            {12.5}
          </div>
          <div className={s.you_cart_sum_total}>
            <span>TOTAL:</span>
            <span>{89}</span>
          </div>
          <Button text={'Check out'} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export { YouCart };
