import React from 'react';

export interface ButtonProps extends HTMLButtonElement {
  label?: string;
  type: 'button' | 'submit' | 'reset';
}

export const Button = ({
  label,
  type = 'button',
}: ButtonProps): JSX.Element => {
  return <button type={type}>{label}</button>;
};
