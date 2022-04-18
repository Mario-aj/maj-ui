import React from 'react';
import { cx } from '../../utils';

type Props = {
  /**
   * List of class names to pass along to spinner component.
   */
  className?: string;

  /**
   * Width and height of the spinner.
   * Constants are available for common sizes:

    - sm = 1.5rem, md = 2.5rem, lg = 4rem, xl = 5rem, 2xl = 6rem, 3xl = 7rem
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

  /**
   * Visual appearence color to apply to element.
   * Constants are available for common colors
   *  - primary = #5F91CC, secondary = #C1C1C1, success = #5BCA8A, warning = #F0B858, danger = #D6394C, light =#FFF ,
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

const sizes = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
  '2xl': 'w-24 h-24',
  '3xl': 'w-28 h-28',
};

const Spinner = ({ className, size = 'md', appearance = 'primary' }: Props) => {
  if (!appearance)
    throw new Error(
      'Spinner appearence must be one of this [primary, secondary, success, warning, danger, light]'
    );

  return (
    <div
      className={cx(
        'border-2 border-gray-300 border-solid rounded-full spin-animation',
        sizes[size],
        classes[appearance],
        className
      )}
    />
  );
};

export type { Props as SpinnerProps };
export { Spinner };
