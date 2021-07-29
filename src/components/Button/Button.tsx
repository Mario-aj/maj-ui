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
    define if button will be outlined or no.
  */
  outline: boolean;

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
  base: 'px-4 py-1.5 text-sm transition-all duration-300 rounded flex items-center justify-center',
  secondary: {
    normal: 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300',
    outline: 'bg-white border border-gray-500',
  },
  primary: {
    normal: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white',
    outline:
      'bg-white text-blue-500 border border-blue-500 hover:bg-blue-200 active:border-0 active:bg-blue-100 active:text-blue-700',
  },
  success: {
    normal: 'bg-green-600 hover:bg-green-500 active:bg-green-800 text-white',
    outline:
      'bg-white text-green-500 border border-green-500 hover:bg-green-200 active:border-0 active:bg-green-100 active:text-green-700',
  },
  warning: {
    normal: 'bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-800 text-white',
    outline:
      'bg-white text-yellow-500 border border-yellow-500 hover:bg-yellow-200 active:border-0 active:bg-yellow-100 active:text-yellow-700',
  },
  danger: {
    normal: 'bg-red-600 hover:bg-red-500 active:bg-red-800 text-white',
    outline:
      'bg-white text-red-500 border border-red-500 hover:bg-red-200 active:border-0 active:bg-red-100 active:text-red-700',
  },
  dark: {
    normal: 'bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white',
    outline:
      'bg-gray-800 text-white border border-white hover:bg-gray-500 active:border-0 active:bg-gray-600',
  },
};

export const Button = ({
  disabled = false,
  label,
  type = 'button',
  intent = 'secondary',
  outline = false,
  onClick,
}: ButtonProps): JSX.Element => {
  const styleVariant = outline ? 'outline' : 'normal';

  const buttonClasses = classnames(
    INTENT_CLASS_Map.base,
    INTENT_CLASS_Map[intent][styleVariant],
    {
      'opacity-30 cursor-not-allowed border-transparent': disabled,
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
