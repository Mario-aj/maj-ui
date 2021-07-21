import React from 'react';

export const Modal: React.FC = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-600">
      <div className="relative flex flex-col p-4 bg-white rounded-md">
        <button className="absolute px-3 py-1 text-white transition-opacity duration-300 bg-gray-500 rounded-full cursor-pointer top-1 right-1 bg-none opacity-80 hover:opacity-100 focus:outline-none">
          x
        </button>
        <div className="mt-8 w-96">body modal!</div>
      </div>
    </div>
  );
};
