/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';
import { INTENT_CLASS_MAP } from './intent';

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

interface PreperButtonClassNameProps {
  outline: boolean;
  full: boolean;
  intent: ButtonProps['intent'];
  disabled: boolean;
  size: string;
  twitterButton: boolean;
}

const preperButtonClasseName = ({
  outline,
  full,
  intent,
  disabled,
  size,
  twitterButton,
}: PreperButtonClassNameProps) => {
  const styleVariant = outline ? 'outline' : 'normal';

  const buttonClasseName = classnames(
    INTENT_CLASS_MAP.base,
    INTENT_CLASS_MAP[intent][styleVariant],
    {
      'opacity-30 cursor-not-allowed border-transparent': disabled,
      'w-full': full,
      'text-sm': size === 'small',
      'text-base': size === 'medium',
      'text-xl': size === 'large',
      'rounded-3xl': twitterButton,
    }
  );

  return buttonClasseName;
};

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
