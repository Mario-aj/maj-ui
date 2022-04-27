import React from 'react';
import {
  MdInfo,
  MdCheckCircleOutline,
  MdWarning,
  MdError,
  MdClose,
} from 'react-icons/md';

import { Container } from './styles';

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
  onClose?: () => void | undefined;

  /**
   * The icon to be displayed
   */
  icon?: React.ReactElement;
};

const ICON_MAP = {
  info: <MdInfo />,
  success: <MdCheckCircleOutline />,
  warning: <MdWarning />,
  error: <MdError />,
};

const AlertMessage = ({
  icon,
  title,
  message,
  type = 'info',
  onClose = undefined,
  ...props
}: AlertMessageProps) => {
  return (
    <Container title={title} type={type} role="alert" {...props}>
      {icon || ICON_MAP[type]}
      <div>
        {title && <h3>{title}</h3>}
        <p>{message}</p>
      </div>
      {onClose && (
        <div id="close-button-wrapper">
          <MdClose id="close-button" onClick={onClose} />
        </div>
      )}
    </Container>
  );
};

export { AlertMessage };
