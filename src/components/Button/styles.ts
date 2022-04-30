import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ButtonProps } from '.';
import { colors } from '../../shared/styles';

type ContainerProps = React.HTMLAttributes<HTMLButtonElement> &
  Omit<ButtonProps, 'label' | 'startIcon' | 'endIcon'>;

const container = () => css`
  label: container;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  text-transform: uppercase;
  user-select: none;
  border: none;
  white-space: nowrap;
  padding: 0.625rem 1rem;
  border-radius: 0.25rem;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  cursor: pointer;
  color: #fff;

  font-weight: 500;
  line-height: 1.75;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.02857em;

  transition: all 0.3s ease-in;

  :active {
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  }
  :disabled {
    background: rgb(209 213 219);
    color: ${colors.secondary.normal.default};
    cursor: not-allowed;
  }
`;

const variantStyles = ({ appearance, outlined }: ContainerProps) => css`
  label: container-variant-${appearance};

  ${outlined
    ? css`
        color: ${colors[appearance].normal.default};
        background: #fff;
        border: 1px solid ${colors[appearance].normal.default};

        :hover {
          background: ${colors[appearance].outlined.hovered};
        }
        :active {
          background: ${colors[appearance].outlined.active};
        }

        :disabled {
          border-color: rgb(209 213 219);
          background: #fff;
        }

        :disabled:hover {
          border-color: rgb(209 213 219);
          background: #fff;
        }
      `
    : css`
        background: ${colors[appearance].normal.default};

        :hover {
          background: ${colors[appearance].normal.hovered};
        }
        :active {
          background: ${colors[appearance].normal.active};
        }

        :disabled:hover {
          background: rgb(209 213 219);
          color: ${colors.secondary.normal.default};
        }
      `}
`;

const fullStyles = ({ full }: ContainerProps) =>
  full &&
  css`
    label: container-full;

    width: 100%;
  `;

const smallSizeStyles = ({ size }: ContainerProps) =>
  size === 'sm' &&
  css`
    label: container-size-small;

    font-weight: 500;
    line-height: 1.75;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    letter-spacing: 0.02857em;
    padding: 0.375rem 0.75rem;
  `;

const largeSizeStyles = ({ size }: ContainerProps) =>
  size === 'lg' &&
  css`
    label: container-size-large;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.75;
    padding: 0.65rem 1.25rem;
    letter-spacing: 0.02857em;
  `;

export const Container = styled('button')<ContainerProps>(
  container,
  variantStyles,
  fullStyles,
  smallSizeStyles,
  largeSizeStyles
);
