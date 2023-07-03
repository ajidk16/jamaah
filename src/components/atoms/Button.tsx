import React from 'react';

interface buttonState {
  icon?: any;
  title: string;
}

const Button: React.FC<buttonState> = ({ icon, title }) => {
  return (
    <button className="py-4 px-6 gradient-red rounded-xl flex gap-2 items-center">
      {icon && <img src={icon} alt="icon" />}
      {title}
    </button>
  );
};

export default Button;
