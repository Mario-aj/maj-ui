import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { ButtonProps } from './types';
import { prepareClassName } from './helpers';

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
}: ButtonProps) => {
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

export { Button };
