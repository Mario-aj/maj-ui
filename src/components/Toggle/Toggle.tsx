import React, { MouseEvent } from 'react';
import classnames from 'classnames';

export interface ToggleProps {
  active: boolean;
  large?: boolean;
  onClick: () => void;
}

export const Toggle = (props: ToggleProps): JSX.Element => {
  const { active, large, onClick } = props;

  const handleClick = (e: MouseEvent<any>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      className={classnames(
        'box-border relative flex items-center h-4 bg-gray-400 outline-none cursor-pointer w-7 rounded-xl',
        {
          'bg-blue-600': active,
          'w-8 h-5': large,
        }
      )}
      onClick={handleClick}
    >
      <div
        className={classnames(
          'h-3 transform duration-300 w-3 rounded-full bg-white ml-0.5 shadow-md',
          {
            'translate-x-3': active,
            'w-4 h-4': large,
          }
        )}
      />
    </div>
  );
};
