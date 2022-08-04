import React from 'react';
import { Navigation } from '../../../components/elements/navigation';
import { Search } from '../../../components/elements/Search';
import s from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div className={s.header}>
        <h2>BookStore</h2>
        <Search />
        <Navigation />
      </div>
    </>
  );
};

export { Header };
