import React from 'react';
import './Button.scss';

interface ButtonProps {
  onClick: () => void,
  title: string,
  isDisabled?: boolean,
}

const Button:React.FC<ButtonProps> = ({
  onClick,
  title,
  isDisabled
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className='button-tag'
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;
