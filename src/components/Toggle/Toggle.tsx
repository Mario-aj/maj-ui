import React from 'react';

export const Toggle = (): JSX.Element => {
  return (
    <div className="box-border relative flex items-center h-4 bg-gray-300 outline-none cursor-pointer w-7 rounded-xl">
      <div className="h-3 w-3 rounded-full bg-white ml-0.5 shadow-md" />
    </div>
  );
};
