import React from 'react';
import s from './CardsInBasket.module.scss';
import { ICardsProps } from '../Cards';

const CardsInBasket: React.FC<ICardsProps> = ({
  img,
  title,
  authors,
  publisher,
  price,
  favorite,
}) => {
  return (
    <>
      <div className={s.card_in_basket}>
        <div className={s.card_in_basket_img}>
          <img src={img} alt="img" />
        </div>
        {favorite ? (
          <>
            <div className={s.card_in_basket_text_favorite}>
              <h4 className={s.card_in_basket_text_title_favorite}>{title}</h4>
              <p className={s.card_in_basket_text_information_favorite}>
                {authors}

                {publisher}
              </p>
              <div className={s.card_in_basket_text_price_favorite}>
                {price}
              </div>
            </div>
            <div className={s.card_in_basket_text_icon}>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.612 1.59567C16.1722 1.14723 15.65 0.791489 15.0752 0.548782C14.5005 0.306074 13.8844 0.181152 13.2623 0.181152C12.6401 0.181152 12.0241 0.306074 11.4493 0.548782C10.8746 0.791489 10.3524 1.14723 9.91255 1.59567L8.99977 2.52591L8.08699 1.59567C7.19858 0.69027 5.99364 0.181622 4.73725 0.181622C3.48085 0.181622 2.27591 0.69027 1.38751 1.59567C0.499101 2.50107 9.36088e-09 3.72905 0 5.00948C-9.36088e-09 6.28991 0.499101 7.51789 1.38751 8.42329L2.30029 9.35353L8.99977 16.1812L15.6992 9.35353L16.612 8.42329C17.0521 7.97506 17.4011 7.44286 17.6393 6.85711C17.8774 6.27136 18 5.64352 18 5.00948C18 4.37543 17.8774 3.7476 17.6393 3.16185C17.4011 2.5761 17.0521 2.0439 16.612 1.59567Z"
                  fill="#FC857F"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <div className={s.card_in_basket_text}>
              <h4 className={s.card_in_basket_text_title}>{title}</h4>
              <p className={s.card_in_basket_text_information}>
                {authors}

                {publisher}
              </p>
              <div className={s.card_in_basket_text_counter}>
                <button>
                  <svg
                    width="12"
                    height="2"
                    viewBox="0 0 12 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="12" height="2" rx="1" fill="#313037" />
                  </svg>
                </button>
                <p>{1}</p>
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 7H9V1C9 0.448 8.552 0 8 0C7.448 0 7 0.448 7 1V7H1C0.448 7 0 7.448 0 8C0 8.552 0.448 9 1 9H7V15C7 15.553 7.448 16 8 16C8.552 16 9 15.553 9 15V9H15C15.553 9 16 8.552 16 8C16 7.448 15.553 7 15 7Z"
                      fill="#313037"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className={s.card_in_basket_price}>
              <p className={s.p}>{price}</p>
            </div>
            <button className={s.card_in_basket_cancel}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6569 10.2429L7.41421 6.00023L11.6569 1.75759C12.0472 1.36727 12.0472 0.733701 11.6569 0.343378C11.2665 -0.0469454 10.633 -0.0469453 10.2426 0.343378L6 4.58602L1.75736 0.343378C1.36704 -0.0469453 0.733469 -0.0469454 0.343146 0.343378C-0.0471771 0.733701 -0.0471771 1.36727 0.343146 1.75759L4.58579 6.00023L0.343146 10.2429C-0.0478838 10.6339 -0.0471771 11.2668 0.343146 11.6571C0.733469 12.0474 1.36633 12.0481 1.75736 11.6571L6 7.41445L10.2426 11.6571C10.6337 12.0481 11.2665 12.0474 11.6569 11.6571C12.0472 11.2668 12.0479 10.6339 11.6569 10.2429Z"
                  fill="#313037"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export { CardsInBasket };
