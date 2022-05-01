import React from 'react';
import {
  MdInfo,
  MdCheckCircleOutline,
  MdWarning,
  MdError,
  MdClose,
} from 'react-icons/md';
import { cx } from '../../shared/helpers';

export type AlertMessageProps = {
  /**
   * The message to be displayed
   */
  message: string;

  /**
   * The type of the message
   */
  type?: 'info' | 'success' | 'warning' | 'error';

  /**
   * The title of the message
   */
  title?: string;

  /**
   * Set the width of the message as full screen
   */
  full?: boolean;

  /**
   * Function to be called when the close button is clicked
   */
  closeFn?: () => void | undefined;

  /**
   * The icon to be displayed
   */
  icon?: () => React.ReactElement;

  /**
   *  The border position of the message.
   */
  accent?: 'top' | 'bottom' | 'left' | 'right';
};

const ICON_MAP = {
  info: MdInfo,
  success: MdCheckCircleOutline,
  warning: MdWarning,
  error: MdError,
};

const TYPES = {
  info: 'bg-blue-100 text-blue-500 border-blue-500',
  success: 'bg-green-100 text-green-500 border-green-500',
  warning: 'bg-orange-100 text-orange-500 border-orange-500',
  error: 'bg-red-100 text-red-500 border-red-500',
};

const ACCENTS = {
  top: 'border-t-4 border-solid',
  bottom: 'border-b-4 border-solid',
  left: 'border-l-4 border-solid',
  right: 'border-r-4 border-solid',
};

const composeClassName = ({
  type = 'info',
  title,
  full,
  accent,
}: Omit<AlertMessageProps, 'message'>) =>
  cx(
    'flex items-center justify-start rounded gap-2 relative py-3 px-4 border-0',
    title && '!items-start',
    full && 'w-full',
    accent && ACCENTS[accent],
    TYPES[type]
  );

const AlertMessage = ({
  icon,
  full,
  title,
  accent,
  closeFn,
  message,
  type = 'info',
}: AlertMessageProps) => {
  const Icon = icon || ICON_MAP[type];
  const composedClassName = composeClassName({ type, title, full, accent });

  return (
    <div
      role="alert"
      aria-atomic="true"
      aria-live="assertive"
      title={title}
      className={composedClassName}
    >
      <Icon className="flex-shrink-0 w-6 h-6" />
      <div className="flex flex-col gap-1 text-gray-800">
        {title && <h3 className="p-0 m-0 font-medium">{title}</h3>}
        <p className="text-base">{message}</p>
      </div>
      {closeFn && (
        <button
          className={cx(
            'cursor-pointer ml-auto flex items-center justify-center bg-transparent transition-colors duration-300 hover:bg-opacity-60  hover:bg-stone-300 rounded-full'
          )}
          onClick={closeFn}
          id="close-button-wrapper"
          tabIndex={0}
        >
          <MdClose className="flex-shrink-0 w-5 h-5" id="close-button" />
        </button>
      )}
    </div>
  );
};

export { AlertMessage };
