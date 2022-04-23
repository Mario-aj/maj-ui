import React from 'react';

import { Container } from './styles';

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

const Spinner = ({ className, size = 'md', appearance = 'primary' }: Props) => {
  if (!appearance)
    throw new Error(
      'Spinner appearence must be one of this [primary, secondary, success, warning, danger, light]'
    );

  return (
    <Container className={className} size={size} appearance={appearance} />
  );
};

export type { Props as SpinnerProps };
export { Spinner };
