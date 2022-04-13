/* eslint-disable no-unused-vars */
import { ReactNode, MouseEvent } from 'react';

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
   *  Set the icon to be shown to the left of the label.
   */
  startIcon?: ReactNode;

  /**
   * Set the icon to be shown to the right of the label.
   */
  endIcon?: ReactNode;

  /**
   * type of button element
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * The size of button.
   */
  size?: 'small' | 'medium' | 'large' | 'full';

  /**
   * onClick handler of button.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * The appearance of the button.
   */
  appearance:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none';
};

export type { Props as ButtonProps };
