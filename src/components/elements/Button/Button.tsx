import React from 'react';
import s from './Button.module.scss';

interface IButtonProps {
  text: string;
}

const Button: React.FC<IButtonProps> = ({ text }) => {
  return (
    <>
      <button className={s.button}>{text}</button>
    </>
  );
};

export { Button };
