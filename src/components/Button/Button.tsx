/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';
import { IconType } from 'react-icons';
import { FaSpinner } from 'react-icons/fa';
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
    define the icon that will be shown on the button
  */
  icon?: IconType;

  /*
    define the if the icon will be shown on the left or right
  */
  iconRight?: boolean;

  /*
    define if loadiing icon will be shown on the button
  */
  loading?: boolean;

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
  icon,
  iconRight,
  loading = false,
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

  const RealIcon = loading ? FaSpinner : icon;

  return (
    <button
      type={type}
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {RealIcon && (
        <RealIcon
          className={classnames('w-full h-full order-first', {
            'mr-2': label && !iconRight,
            'order-last ml-2': iconRight,
            'animate-spin': loading,
          })}
        />
      )}
      {label}
    </button>
  );
};
