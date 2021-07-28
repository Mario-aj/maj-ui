/* eslint-disable no-unused-vars */
import React from 'react';

export interface ButtonProps {
  /*
    string tht defines the text of the button
  */
  label: string;

  /*
    string that defines the type of the button
  */
  type: 'button' | 'submit' | 'reset';

  /*
    click event handler
  */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  label,
  type = 'button',
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className="px-2 py-1 text-white bg-green-600 border-none rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
