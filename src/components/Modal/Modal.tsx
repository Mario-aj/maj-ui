import React, { ReactNode, useEffect } from 'react';
import classnames from 'classnames';

export interface ModalProps {
  /*
    Variable that determins if the modal is open or closed.
  */
  isOpen: boolean;

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
  className,
  children,
  isOpen = false,
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
        'fixed top-0 bottom-0 left-0 right-0 z-50 opacity-0 pointer-events-none transition-all duration-300 ease-in-out flex items-center justify-center',
        {
          'opacity-100 pointer-events-auto': isOpen,
        }
      )}
      style={{ background: 'rgba(0, 0, 0, 0.7)' }}
    >
      <div
        className={classnames(
          'relative flex flex-col p-4 bg-white -translate-y-52 rounded-md box-border transition-all duration-300 ease-in-out ',
          {
            'translate-y-0': isOpen,
          }
        )}
      >
        <button
          className="absolute px-3 py-1 text-white transition-opacity duration-300 bg-gray-500 rounded-full cursor-pointer top-1 right-1 bg-none opacity-80 hover:opacity-100 focus:outline-none"
          onClick={onClose}
        >
          x
        </button>
        <div className={classnames('mt-8 w-96', className)}>{children}</div>
      </div>
    </div>
  );
};