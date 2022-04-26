import React from 'react';

import { Container } from './styles';
import { SharedProps } from '../../shared/types';

export type SpinnerProps = SharedProps & {
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
};

const Spinner = ({
  className,
  size = 'md',
  appearance = 'primary',
}: SpinnerProps) => {
  if (!appearance)
    throw new Error(
      'Spinner appearence must be one of this [primary, secondary, success, warning, danger, light]'
    );

  return (
    <Container className={className} size={size} appearance={appearance} />
  );
};

export { Spinner };
