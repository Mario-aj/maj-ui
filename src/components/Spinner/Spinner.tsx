import React from 'react';
import { INTENT_CLASSES } from '../../../styles/intents';

export interface SpinnerProps {
  intent: 'primary' | 'success' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
}

export const Spinner = (props: SpinnerProps): JSX.Element => {
  const { intent = 'primary', size = 'md' } = props;

  const spinnerSizeClass = { lg: '5.75rem', md: '2.75rem', sm: '1.75rem' };

  return (
    <span className="w-8 h-8 spinner">
      <style>{`
      .spinner {
        position: relative;
        color: transparent !important;
        pointer-events: none;
      }

      .spinner:after {
        content: '';
        position: absolute;
        top: calc(50% - (1em / 2));
        display: block;
        width: ${spinnerSizeClass[size]};
        height: ${spinnerSizeClass[size]};
        border: 0.25rem solid ${INTENT_CLASSES[intent]};
        border-radius: 100%;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        animation: spinAnimation 1s infinite linear;
      }

      @keyframes spinAnimation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
    </span>
  );
};
