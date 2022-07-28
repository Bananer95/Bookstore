import React from 'react';
import { Navigation } from '../../../components/elements/navigation';
import { Search } from '../../../components/elements/Search';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <h2>BookStore</h2>
        <Search />
        <Navigation />
      </div>
    </>
  );
};

export { Header };
