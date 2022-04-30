/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Spinner } from '..';

import { Container } from './styles';
import { SharedProps } from '../../shared/types';
import { cx } from '../../shared/helpers';

export type ButtonProps = SharedProps & {
  /**
   * The label of the button.
   */
  label: string;

  /**
   * The classes of the button.
   */
  className?: string;

  /**
   * Disabled state of the button.
   */
  disabled?: boolean;

  /**
   *  Outlined state of the button.
   */
  outlined?: boolean;

  /**
   * Loading state of the button.
   */
  loading?: boolean;

  /**
   *  Set the icon to be shown to the left of the label.
   */
  startIcon?: React.ReactNode;

  /**
   * Set the icon to be shown to the right of the label.
   */
  endIcon?: React.ReactNode;

  /**
   * type of button element
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * The size of button.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Define if button will stretch to full width.
   */

  full?: boolean;

  /**
   * onClick handler of button.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  label,
  endIcon,
  startIcon,
  type = 'button',
  size = 'md',
  loading = false,
  disabled = false,
  outlined = false,
  appearance = 'primary',
  ...props
}: ButtonProps) => {
  if (!appearance)
    throw new Error(
      'Button appearence must be one of this [primary, secondary, success, warning, danger, none]'
    );

  const spinnerAppearance = outlined && !disabled ? appearance : 'primary';

  return (
    <button
      className={cx(
        'flex items-center justify-center gap-2 uppercase select-none border-none whitespace-nowrap py-2.5 px-4 rounder cursor-pointer text-sm leading-5 font-medium text-white tracking-wide transition-all duration-300 ease-in-out active:shadow-inner disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed font'
      )}
      // appearance={appearance}
      // outlined={outlined}
      disabled={disabled}
      type={type}
      // size={size}
      {...props}
    >
      {loading && <Spinner appearance={spinnerAppearance} size="sm" />}
      {!loading && startIcon && startIcon}
      {label}
      {!loading && endIcon && endIcon}
    </button>
  );
};

export { Button };
