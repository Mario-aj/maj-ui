import React from "react";

export interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps): JSX.Element => {
  return (
    <button type="button" className="bg-red-500 rounded">
      {label}
    </button>
  );
};
