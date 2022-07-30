import './Cards.css';

interface ICardsProps {
  img: string;
  title: string;
  authors: string;
  publisher: string;
  price: string;
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
      <div className="card">
        <div className="card_img">
          <img src={img} alt="img" />
        </div>
        <h4 className="card_title">{title}</h4>
        <p className="card_information">
          {authors}

          {publisher}
        </p>
        <div className="card_price">{price}</div>
      </div>
    </>
  );
};

export { Cards };
