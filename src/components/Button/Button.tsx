/* eslint-disable no-unused-vars */
import React from 'react';
import { preperButtonClasseName } from './utils';

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
    define if button will occupy the entire available space or no.
  */
  full?: boolean;

  /*
    size of the button
  */
  size: 'small' | 'medium' | 'large';

  /*
    with border radius rounded to the specified value
  */
  twitterButton: boolean;

  /*
    intent define the appearance of the button
  */
  intent: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';

  /*
    click event handler
  */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  disabled = false,
  label,
  type = 'button',
  intent = 'secondary',
  outline = false,
  full = false,
  size = 'small',
  twitterButton = false,
  onClick = () => {},
}: ButtonProps): JSX.Element => {
  const buttonClassName = preperButtonClasseName({
    intent,
    outline,
    full,
    size,
    twitterButton,
    disabled,
  });

  return (
    <button
      type={type}
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
