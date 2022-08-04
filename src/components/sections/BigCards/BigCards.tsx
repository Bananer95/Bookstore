import React from 'react';
import { Button } from '../../elements/Button';
import s from './BigCards.module.scss';

interface IBigCardsProps {
  img: string;
  title: string;
  authors: string;
  publisher: string;
  price: string;
  language: string;
  format: string;
}

const BigCards: React.FC<IBigCardsProps> = ({
  img,
  title,
  authors,
  publisher,
  price,
  language,
  format,
}) => {
  return (
    <>
      <div className={s.bigcard}>
        <h2 className={s.bigcard_title}>{title}</h2>
        <div className={s.bigcard_block}>
          <div className={s.bigcard_block_img}>
            <img src={img} alt="book" />
            <button>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.612 2.41452C17.1722 1.96607 16.65 1.61034 16.0752 1.36763C15.5005 1.12492 14.8844 1 14.2623 1C13.6401 1 13.0241 1.12492 12.4493 1.36763C11.8746 1.61034 11.3524 1.96607 10.9126 2.41452L9.99977 3.34476L9.08699 2.41452C8.19858 1.50912 6.99364 1.00047 5.73725 1.00047C4.48085 1.00047 3.27591 1.50912 2.38751 2.41452C1.4991 3.31992 1 4.5479 1 5.82833C1 7.10875 1.4991 8.33674 2.38751 9.24214L3.30029 10.1724L9.99977 17L16.6992 10.1724L17.612 9.24214C18.0521 8.79391 18.4011 8.26171 18.6393 7.67596C18.8774 7.0902 19 6.46237 19 5.82833C19 5.19428 18.8774 4.56645 18.6393 3.9807C18.4011 3.39494 18.0521 2.86275 17.612 2.41452V2.41452Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{' '}
            </button>
          </div>
          <div className={s.bigcard_block_details}>
            <div className={s.bigcard_block_details_price}>{price}</div>
            <div className={s.bigcard_block_details_text}>
              <div className={s.bigcard_block_details_text_author}>
                <span>Authors</span>
                <p>{authors}</p>
              </div>
              <div className={s.bigcard_block_details_text_publisher}>
                <span>Publisher</span>
                <p>{publisher}</p>
              </div>
              <div className={s.bigcard_block_details_text_language}>
                <span>Language</span>
                <p>{language}</p>
              </div>
              <div className={s.bigcard_block_details_text_format}>
                <span>Fromta</span>
                <p>{format}</p>
              </div>
            </div>
            <Button text={'Add to card'} />
          </div>
        </div>
        <div className={s.bigcard_block_description}>
          <div className={s.bigcard_block_description_title}>
            <h4>Description</h4>
          </div>
          <div className={s.bigcard_block_description_text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              natus, esse cumque iusto expedita magni. Eius velit ducimus
              similique, quae odio libero suscipit animi, laudantium dignissimos
              tenetur vitae debitis, consectetur adipisci! Nihil accusantium
              repudiandae quaerat quod voluptatibus debitis ratione aliquid illo
              officiis minima. Harum adipisci modi, neque eveniet ad officia aut
              doloremque incidunt laboriosam ea ipsa quis tenetur voluptatum hic
              similique sint minima commodi aliquid dolor voluptates eaque eos
              nam non? At quasi repudiandae a fuga iste nulla suscipit quaerat
              aspernatur aperiam placeat odit officiis commodi totam inventore,
              repellat iusto quia, consequatur, vitae dolores eligendi. Magni,
              modi ab! Modi est, beatae quidem tenetur unde laborum
              necessitatibus hic autem id commodi, qui earum cum asperiores
              dolore sapiente porro totam veniam exercitationem reiciendis,
              natus recusandae! Aut, minus cupiditate?
            </p>
          </div>
          <div className={s.social}>
            <a href={'https://www.facebook.com'}>
              <svg
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                  stroke="#313037"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a href={'https://twitter.com/?lang=en'}>
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 2.00005C22.0424 2.67552 20.9821 3.19216 19.86 3.53005C19.2577 2.83756 18.4573 2.34674 17.567 2.12397C16.6767 1.90121 15.7395 1.95724 14.8821 2.2845C14.0247 2.61176 13.2884 3.19445 12.773 3.95376C12.2575 4.71308 11.9877 5.61238 12 6.53005V7.53005C10.2426 7.57561 8.50127 7.18586 6.93101 6.39549C5.36074 5.60513 4.01032 4.43868 3 3.00005C3 3.00005 -1 12 8 16C5.94053 17.398 3.48716 18.099 1 18C10 23 21 18 21 6.50005C20.9991 6.2215 20.9723 5.94364 20.92 5.67005C21.9406 4.66354 22.6608 3.39276 23 2.00005V2.00005Z"
                  stroke="#313037"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { BigCards };
