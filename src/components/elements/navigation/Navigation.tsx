import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <div className={s.header_navigation}>
        <Link to={'/favorite'}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.612 21.4145C35.1722 20.9661 34.65 20.6103 34.0752 20.3676C33.5005 20.1249 32.8844 20 32.2623 20C31.6401 20 31.0241 20.1249 30.4493 20.3676C29.8746 20.6103 29.3524 20.9661 28.9126 21.4145L27.9998 22.3448L27.087 21.4145C26.1986 20.5091 24.9936 20.0005 23.7372 20.0005C22.4809 20.0005 21.2759 20.5091 20.3875 21.4145C19.4991 22.3199 19 23.5479 19 24.8283C19 26.1088 19.4991 27.3367 20.3875 28.2421L21.3003 29.1724L27.9998 36L34.6992 29.1724L35.612 28.2421C36.0521 27.7939 36.4011 27.2617 36.6393 26.676C36.8774 26.0902 37 25.4624 37 24.8283C37 24.1943 36.8774 23.5664 36.6393 22.9807C36.4011 22.3949 36.0521 21.8627 35.612 21.4145V21.4145Z"
              stroke="#313037"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <Link to={'/cart'}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1 19L19 35.3929C19 35.8191 19.1598 36.2279 19.4442 36.5293C19.7287 36.8307 20.1144 37 20.5167 37H35.4833C35.8856 37 36.2713 36.8307 36.5558 36.5293C36.8402 36.2279 37 35.8191 37 35.3929L34.9 19H21.1Z"
              stroke="#313037"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31 25C31 25.5304 30.6839 26.0391 30.1213 26.4142C29.5587 26.7893 28.7956 27 28 27C27.2044 27 26.4413 26.7893 25.8787 26.4142C25.3161 26.0391 25 25.5304 25 25"
              stroke="#313037"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <a href="#">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 37V35C36 33.9391 35.5786 32.9217 34.8284 32.1716C34.0783 31.4214 33.0609 31 32 31H24C22.9391 31 21.9217 31.4214 21.1716 32.1716C20.4214 32.9217 20 33.9391 20 35V37"
              stroke="#313037"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28 27C30.2091 27 32 25.2091 32 23C32 20.7909 30.2091 19 28 19C25.7909 19 24 20.7909 24 23C24 25.2091 25.7909 27 28 27Z"
              stroke="#313037"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export { Navigation };
