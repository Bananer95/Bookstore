import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={s.footer}>
        <p>©2022 Bookstore</p>
        <p>All rights reserved</p>
      </div>
    </>
  );
};

export { Footer };
