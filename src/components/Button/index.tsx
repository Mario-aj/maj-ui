/* eslint-disable no-unused-vars */
import * as React from 'react';
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
  label,
  className = '',
  intent = 'primary',
  type = 'button',
  size = 'medium',
  loading = false,
  outlined = false,
  ...props
}: Props) => {
  if (!intent) throw new Error("Button's intent is required");

  const classes = prepareClassName({ size, intent, className, outlined });

  return (
    <button className={classes} type={type} {...props}>
      {label}
    </button>
  );
};

export type { Props as ButtonProps };
export { Button };
