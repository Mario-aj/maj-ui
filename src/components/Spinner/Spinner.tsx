import React from 'react';

export const SPinner = (): JSX.Element => (
  <span className="w-4 h-4 spinner">
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
        width: 3rem;
        height: 3rem;
        border: 0.25rem solid red;
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
