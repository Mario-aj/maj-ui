/* eslint-disable no-unused-vars */
import * as React from 'react';

import { Spinner } from '..';
import { composeClassName } from './styles';
import { SharedProps } from '../../shared/types';

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
  full,
  label,
  onClick,
  endIcon,
  startIcon,
  className,
  size = 'md',
  type = 'button',
  loading = false,
  disabled = false,
  outlined = false,
  appearance = 'primary',
}: ButtonProps) => {
  if (!appearance)
    throw new Error(
      'Button appearence must be one of this [primary, secondary, success, warning, danger, none]'
    );

  const spinnerAppearance = outlined && !disabled ? appearance : 'secondary';
  const composedClassName = composeClassName({
    full,
    size,
    outlined,
    className,
    appearance,
  });

  return (
    <button
      className={composedClassName}
      aria-disabled={disabled}
      aria-labelledby={label}
      aria-pressed={disabled}
      disabled={disabled}
      onClick={onClick}
      tabIndex={0}
      type={type}
    >
      {loading && <Spinner appearance={spinnerAppearance} size="sm" />}
      {!loading && startIcon && startIcon}
      {label}
      {!loading && endIcon && endIcon}
    </button>
  );
};

export { Button };
