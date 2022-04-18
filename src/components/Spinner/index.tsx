import React from 'react';
import { cx } from '../../utils';

type Props = {
  /**
   * The className to styles the spinner component.
   */
  className?: string;

  /**
   * The size of spinner
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The appearance of the spinner'
   */
  appearance:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light';
};

const classes = {
  primary: 'border-r-blue',
  secondary: 'border-r-gray-dark',
  success: 'border-r-green',
  warning: 'border-r-yellow',
  danger: '!border-r-red',
  light: 'border-r-white',
};

const Spinner = ({
  size = 'md',
  className = '',
  appearance = 'primary',
}: Props) => {
  if (!appearance)
    throw new Error(
      'Spinner appearence must be one of this [primary, secondary, success, warning, danger, light]'
    );

  return (
    <div
      className={cx(
        'border-2 border-gray-300 border-solid rounded-full spin-animation',
        size === 'sm' && 'w-6 h-6',
        size === 'md' && 'w-10 h-10',
        size === 'lg' && 'w-16 h-16',
        classes[appearance],
        className
      )}
    />
  );
};

export type { Props as SpinnerProps };
export { Spinner };
