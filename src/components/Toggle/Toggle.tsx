import React, { MouseEvent } from 'react';
import classnames from 'classnames';

export interface ToggleProps {
  /*
    define the state of the toggle (on/off)
  */
  checked: boolean;

  /*
    define the size of the toggle
  */
  large?: boolean;

  /*
    difine the disabled state of the toggle
  */
  disabled?: boolean;

  /*
    Click action, to change the state of the toggle
  */
  onClick: () => void;
}

export const Toggle = (props: ToggleProps): JSX.Element => {
  const { checked, large, disabled, onClick } = props;

  const handleClick = (e: MouseEvent<any>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      className={classnames(
        'box-border relative flex items-center h-4 bg-gray-400 outline-none cursor-pointer w-7 rounded-xl',
        {
          'bg-blue-600': checked,
          'w-8 h-5': large,
          'opacity-50 cursor-not-allowed': disabled,
        }
      )}
      onClick={(e) => !disabled && handleClick(e)}
    >
      <div
        className={classnames(
          'h-3 transform duration-300 w-3 rounded-full bg-white ml-0.5 shadow-md',
          {
            'translate-x-3': checked,
            'w-4 h-4': large,
          }
        )}
      />
    </div>
  );
};
