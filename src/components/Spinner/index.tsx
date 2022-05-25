import React from 'react';

import { SharedProps } from '../../shared/types';
import { cx } from '../../shared/helpers';

export type SpinnerProps = {
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
   * Spinner custom color appearance.
   */
  customColor?: string;

  /**
   * Spinner appearance.
   */
  appearance?: SharedProps['appearance'];
};

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-14 h-14',
  xl: 'w-20 h-20',
  '2xl': 'w-24 h-24',
  '3xl': 'w-28 h-28',
};

const spinnerAppearance = {
  primary: 'border-r-blue-600',
  secondary: 'border-r-gray-600',
  success: 'border-r-green-600',
  warning: 'border-r-yellow-600',
  danger: 'border-r-red-600',
};

const Spinner = ({
  className,
  appearance,
  customColor,
  size = 'md',
}: SpinnerProps) => {
  if (!appearance && !customColor)
    throw new Error(
      'Spinner appearence must be one of this [primary, secondary, success, warning, danger, light] or custom color must be provided'
    );

  return (
    <section
      aria-label="spinner"
      title={appearance ? `${appearance}-spinner` : 'spinner'}
      className={cx(
        'border-2 border-solid border-gray-300 rounded-full animate-spin_faster',
        appearance && spinnerAppearance[appearance],
        sizes[size],
        className
      )}
      style={{ borderRightColor: customColor }}
    />
  );
};

export { Spinner };
