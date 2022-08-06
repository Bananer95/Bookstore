import s from './Cards.module.scss';

export interface ICardsProps {
  img: string;
  title: string;
  authors: string;
  publisher: string;
  price: string;
  favorite?: boolean;
}

const Cards: React.FC<ICardsProps> = ({
  img,
  title,
  authors,
  publisher,
  price,
}) => {
  return (
    <>
      <div className={s.card}>
        <div className={s.card_item_img}>
          <img src={img} alt="img" />
        </div>
        <h4 className="card_title">{title}</h4>
        <p className={s.card_information}>
          {authors}

          {publisher}
        </p>
        <div className={s.card_price}>{price}</div>
      </div>
    </>
  );
};

export { Cards };
