import React from 'react';
import { Button } from '../Button';
import s from './Subscribe.module.scss';

const Subscribe = () => {
  return (
    <>
      <div className={s.subscribe}>
        <h3 className={s.h3}>Subscribe to Newsletter</h3>
        <p className={s.p}>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
        <form action="" className={s.form}>
          <input className={s.input} type="text" placeholder="Your Email" />
          <Button text={'Subscribe'} />
        </form>
      </div>
    </>
  );
};

export { Subscribe };
