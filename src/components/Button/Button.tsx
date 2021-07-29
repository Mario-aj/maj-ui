/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';

export interface ButtonProps extends HTMLButtonElement {
  /*
    string tht defines the text of the button
  */
  label: string;

  /*
    string that defines the type of the button
  */
  type: 'button' | 'submit' | 'reset';

  /*
    disables the button
  */
  disabled: boolean;

  /*
    intent define the appearance of the button
  */
  intent: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';

  /*
    click event handler
  */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const INTENT_CLASS_Map = {
  base: 'px-4 py-1.5 text-sm border-none transition-all duration-300 rounded flex items-center justify-center',
  secondary: {
    normal: 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300',
  },
  primary: {
    normal: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white',
  },
  success: {
    normal: 'bg-green-600 hover:bg-green-500 active:bg-green-800 text-white',
  },
  warning: {
    normal: 'bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-800 text-white',
  },
  danger: {
    normal: 'bg-red-600 hover:bg-red-500 active:bg-red-800 text-white',
  },
  dark: {
    normal: 'bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white',
  },
};

export const Button = ({
  disabled,
  label,
  type = 'button',
  intent,
  onClick,
}: ButtonProps): JSX.Element => {
  const buttonClasses = classnames(
    INTENT_CLASS_Map.base,
    INTENT_CLASS_Map[intent].normal,
    {
      'opacity-30 cursor-not-allowed': disabled,
    }
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
