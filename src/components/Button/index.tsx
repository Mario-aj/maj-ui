import React from 'react';
import { Spinner } from '..';

import { ButtonProps } from './types';
import { prepareClassName } from './helpers';

const Button = ({
  label,
  endIcon,
  startIcon,
  className = '',
  type = 'button',
  size = 'medium',
  loading = false,
  outlined = false,
  appearance = 'primary',
  ...props
}: ButtonProps) => {
  if (!appearance) throw new Error('Button appearance is required');

  const classes = prepareClassName({ size, appearance, className, outlined });

  return (
    <button className={classes} type={type} {...props}>
      {loading && <Spinner appearance="light" size="sm" />}
      {!loading && startIcon && startIcon}
      {label}
      {!loading && endIcon && endIcon}
    </button>
  );
};

export { Button };
