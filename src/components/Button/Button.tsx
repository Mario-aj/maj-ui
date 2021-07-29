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
    click event handler
  */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  disabled,
  label,
  type = 'button',
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={classnames(
        'px-4 py-1.5 text-sm bg-gray-100 border-none hover:bg-gray-200 transition-all duration-300 active:bg-gray-300 rounded flex items-center justify-center',
        {
          'opacity-30 cursor-not-allowed': disabled,
        }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
