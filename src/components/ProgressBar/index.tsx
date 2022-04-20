import React from 'react';

import { Wrapper, Progress } from './styles';

type Props = {
  /**
   * List of class names to pass along to spinner component.
   */
  className?: string;

  /**
   *  Value between 0 and 100 (inclusive) that determines the width of the progress meter. Values below 0 or above 100 will be interpreted as 0 or 100 respectively.
   */
  value: number;

  /**
   * Progress height size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

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

const progressValue = (value: number) => {
  if (value > 100) {
    return 100;
  } else if (value < 0) {
    return 0;
  }

  return value;
};

const ProgressBar = ({ appearance, value, className, size = 'md' }: Props) => {
  if (!appearance)
    throw new Error(
      'ProgressBar appearence must be one of this [primary, secondary, success, warning, danger, light]'
    );

  value = progressValue(value);

  return (
    <Wrapper size={size}>
      <Progress appearance={appearance} value={value} className={className} />
    </Wrapper>
  );
};

export type { Props as ProgressBarProps };
export { ProgressBar };
