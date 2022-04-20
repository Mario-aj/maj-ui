import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ButtonProps } from '.';
import { colors } from '../../styles';

type ContainerProps = React.HTMLAttributes<HTMLButtonElement> &
  Omit<ButtonProps, 'label' | 'startIcon' | 'endIcon'>;

const container = () => css`
  label: container;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  white-space: nowrap;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  font-size: 1rem;
  color: #fff;

  transition: all 0.2s ease-in;

  :active {
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  }
  :disabled {
    background: rgb(209 213 219);
    color: ${colors.secondary.normal.default};
    cursor: not-allowed;
  }
`;

const outlinedStyles = ({ outlined }: ContainerProps) =>
  outlined &&
  css`
    background: #fff;
    border: 1px solid;

    :disabled {
      border-color: rgb(209 213 219);
      background: #fff;
    }
  `;

const variantStyles = ({ appearance, outlined }: ContainerProps) => css`
  label: container-variant-${appearance};

  ${outlined
    ? css`
        color: ${colors[appearance].normal.default};
        border-color: ${colors[appearance].normal.default};

        :hover {
          background: ${colors[appearance].outlined.hovered};
        }
        :active {
          background: ${colors[appearance].outlined.active};
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

const lightStyles = ({ appearance }: ContainerProps) =>
  appearance === 'light' &&
  css`
    label: container-light;

    color: #4b5563;
  `;

const fullSizeStyles = ({ size }: ContainerProps) =>
  size === 'full' &&
  css`
    label: container-size-full;

    width: 100%;
    font-size: 1.125rem;
    line-height: 1.75rem;
  `;

const smallSizeStyles = ({ size }: ContainerProps) =>
  size === 'small' &&
  css`
    label: container-size-small;

    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  `;

const largeSizeStyles = ({ size }: ContainerProps) =>
  size === 'large' &&
  css`
    label: container-size-large;

    font-size: 1.125rem;
    line-height: 1.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  `;

export const Container = styled('button')<ContainerProps>(
  container,
  outlinedStyles,
  variantStyles,
  lightStyles,
  fullSizeStyles,
  smallSizeStyles,
  largeSizeStyles
);
