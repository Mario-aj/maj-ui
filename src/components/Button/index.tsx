/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Spinner } from '..';

import { prepareClassName } from './helpers';

type Props = {
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
  size?: 'small' | 'medium' | 'large' | 'full';

  /**
   * onClick handler of button.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * The appearance of the button.
   */
  appearance:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none';
};

const Button = ({
  label,
  endIcon,
  startIcon,
  className = '',
  type = 'button',
  size = 'medium',
  loading = false,
  outlined = false,
  appearance = 'primary',
  ...props
}: Props) => {
  if (!appearance)
    throw new Error(
      'Button appearence must be one of this [primary, secondary, success, warning, danger, none]'
    );

  const classes = prepareClassName({ size, appearance, className, outlined });

  return (
    <button className={classes} type={type} {...props}>
      {loading && <Spinner appearance="light" size="sm" />}
      {!loading && startIcon && startIcon}
      {label}
      {!loading && endIcon && endIcon}
    </button>
  );
};

export type { Props as ButtonProps };
export { Button };
