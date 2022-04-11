/* eslint-disable no-unused-vars */
import * as React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { prepareClassName } from './helpers';

type Props = {
  /**
   * The label of the button.
   */
  label: string;

  /**
   * The classes of the button.
   */
  className?: string;

  /**
   * Disabled state of the button.
   */
  disabled?: boolean;

  /**
   *  Outlined state of the button.
   */
  outlined?: boolean;

  /**
   * Loading state of the button.
   */
  loading?: boolean;

  /**
   *  Define if the icon is on the left or right of the label.
   */
  iconRight?: boolean;

  /**
   * icon to display on button
   */
  icon?: React.ReactNode;

  /**
   * type of button element
   */
  type: 'button' | 'submit' | 'reset';

  /**
   * The size of button.
   */
  size?: 'small' | 'medium' | 'large' | 'full';

  /**
   * onClick handler of button.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * The appearance of the button.
   */
  intent: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'none';
};

const Button = ({
  icon,
  label,
  className = '',
  type = 'button',
  size = 'medium',
  loading = false,
  outlined = false,
  intent = 'primary',
  ...props
}: Props) => {
  if (!intent) throw new Error("Button's intent is required");

  const classes = prepareClassName({ size, intent, className, outlined });

  return (
    <button className={classes} type={type} {...props}>
      {loading && (
        <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
      )}
      {!loading && icon && icon}
      {label}
    </button>
  );
};

export type { Props as ButtonProps };
export { Button };
