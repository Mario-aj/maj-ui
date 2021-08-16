import React from 'react';
import classnames from 'classnames';

export interface ToggleProps {
  active: boolean;
}

export const Toggle = ({ active }: ToggleProps): JSX.Element => {
  return (
    <div
      className={classnames(
        'box-border relative flex items-center h-4 bg-gray-400 outline-none cursor-pointer w-7 rounded-xl',
        {
          'bg-blue-600': active,
        }
      )}
    >
      <div
        className={classnames(
          'h-3 transform duration-300 w-3 rounded-full bg-white ml-0.5 shadow-md',
          {
            'translate-x-3': active,
          }
        )}
      />
    </div>
  );
};
