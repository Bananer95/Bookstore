import React, { useState } from 'react';
import { Navigation } from '../../../components/elements/navigation';
import { Search } from '../../../components/elements/Search';
import s from './Header.module.scss';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handlerChanger = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={s.header}>
        <h2 className={s.h2}>BookStore</h2>
        {!menu ? (
          <>
            <div className={s.header_content}>
              <Search />
              <Navigation />
            </div>
            <div className={s.header_burger}>
              <button
                onClick={() => handlerChanger()}
                className={s.header_burger_button}
              ></button>
            </div>
          </>
        ) : (
          <div className={s.header_menu}>
            <div className={s.header_menu_navigation}>
              <div className={s.header_menu_navigation_contaner}>
                <div
                  className={
                    s.header_menu_navigation_header_menu_navigation_contaner_header
                  }
                >
                  <button
                    onClick={() => handlerChanger()}
                    className={
                      s.header_menu_navigation_header_menu_navigation_contaner_close
                    }
                  >
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
                </div>

                <Search />
                <Navigation />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { Header };
