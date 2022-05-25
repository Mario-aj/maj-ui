import React from 'react';

import { SharedProps } from '../../shared/types';
import { cx, BG_APPEARANCE } from '../../shared/helpers';

export type ProgressBarProps = {
  /**
   * List of class names to pass along to progress.
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
   * Progress custom color appearance.
   */
  customColor?: string;

  /**
   * Progress background color appearance.
   */
  appearance?: SharedProps['appearance'];
};

const sizes = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
  xl: 'h-4',
};

const progressValue = (value: number) => {
  if (value > 100) return 100;

  if (value < 0) return 0;

  return value;
};

const ProgressBar = ({
  value,
  className,
  appearance,
  customColor,
  size = 'md',
}: ProgressBarProps) => {
  if (!appearance && !customColor)
    throw new Error(
      'ProgressBar appearence must be one of this [primary, secondary, success, warning, danger, light] or customColor must be provided'
    );

  value = progressValue(value);

  return (
    <section
      aria-label="progress-bar"
      role="progressbar"
      className={cx('w-full bg-gray-300 rounded-lg', sizes[size], className)}
    >
      <div
        aria-label="progress"
        className={cx(
          'h-full rounded-lg overflow-hidden',
          appearance && BG_APPEARANCE[appearance]
        )}
        style={{ width: `${value}%`, background: customColor }}
      />
    </section>
  );
};

export { ProgressBar };
