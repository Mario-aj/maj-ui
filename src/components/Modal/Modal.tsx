import React, { ReactNode, useEffect } from 'react';
import classnames from 'classnames';

export interface ModalProps {
  /*
    Variable that determins if the modal is open or closed.
  */
  isOpen: boolean;

  /*
    The title of modal.
  */
  title?: string;

  /*
    Classes that will be applied to the modal content.
  */
  className?: string;

  /*
    Component that will be rendered when the modal is open.
  */
  children?: ReactNode;

  /*
    Callback function that will be called to close the modal.
  */
  onClose: () => void;
}

export const Modal = ({
  className = '',
  children,
  isOpen = false,
  title = '',
  onClose,
}: ModalProps): JSX.Element => {
  useEffect(() => {
    document.addEventListener('keydown', closeOnKeyDown);

    return () => {
      document.removeEventListener('keydown', closeOnKeyDown);
    };
  });

  const closeOnKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) onClose();
  };

  return (
    <div
      className={classnames(
        'fixed top-0 bottom-0 left-0 right-0 z-50 opacity-0 p-8 pointer-events-none transition-all duration-300 ease-in-out flex items-center justify-center',
        {
          'opacity-100 pointer-events-auto': isOpen,
        }
      )}
      style={{ background: 'rgba(0, 0, 0, 0.7)' }}
      onClick={onClose}
    >
      <div
        className={classnames(
          'relative flex flex-col p-4 bg-white -translate-y-52 rounded-md box-border transition-all duration-300 ease-in-out ',
          {
            'translate-y-0': isOpen,
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h1 className="m-0 text-lg font-bold">{title}</h1>
          <button
            className="px-3 py-1 text-white transition-opacity duration-300 bg-gray-500 rounded-full cursor-pointer bg-none opacity-80 hover:opacity-100 focus:outline-none"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <div
          className={classnames(
            'mt-6 w-96 h-72 overflow-y-scroll custom-scrollbar',
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
