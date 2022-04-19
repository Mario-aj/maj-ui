import React from 'react';
import { cx } from '../../utils';

type Props = {
  /**
   * List of class names to pass along to spinner component.
   */
  className?: string;

  /**
   * The value that define the width of progress status.
   *
   * The value must be a number from 0 to 100. that's corresponing in percentage.
   */
  progressValue: number;

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
  primary: 'bg-blue',
  secondary: 'bg-gray-dark',
  success: 'bg-green',
  warning: 'bg-yellow',
  danger: 'bg-red',
  light: 'bg-white',
};

const ProgressBar = ({ appearance, progressValue, className }: Props) => {
  if (!appearance)
    throw new Error(
      'ProgressBar appearence must be one of this [primary, secondary, success, warning, danger, light]'
    );

  if (!progressValue || (progressValue < 0 && progressValue > 100))
    throw new Error(
      'ProgressValue is required and must be a number between 0 and 100'
    );

  return (
    <div className="w-full h-2 bg-gray-300 rounded-lg">
      <div
        className={cx(
          'h-full overflow-hidden rounded-lg progress-animation',
          classes[appearance],
          className
        )}
        style={{ width: `${progressValue}%` }}
      />
    </div>
  );
};

export { ProgressBar };
