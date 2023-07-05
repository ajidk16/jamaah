import React from 'react';

interface buttonState {
  icon?: any;
  className?: string;
  title: string;
}

const Button: React.FC<buttonState> = ({ className, icon, title }) => {
  return (
    <button
      className={`py-4 px-6 gradient-red rounded-xl flex gap-2 items-center ${className}`}
    >
      {icon && <img src={icon} alt="icon" />}
      {title}
    </button>
  );
};

export default Button;
