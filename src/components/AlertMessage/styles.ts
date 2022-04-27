import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { AlertMessageProps } from '.';
import { colors, textColor } from '../../shared/styles';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<AlertMessageProps, 'accent' | 'full' | 'title' | 'type'>;

const container = ({ accent }: ContainerProps) => css`
  label: container;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  position: relative;

  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background: ${colors.primary.outlined.hovered};
  ${accent && `border-${accent}: 4px solid ${colors.primary.normal.default}`};

  svg {
    flex-shrink: 0;
    color: ${colors.primary.normal.default};
    width: 1.5rem;
    height: 1.5rem;
  }

  div[id='close-button-wrapper'] {
    cursor: pointer;
    margin-left: 0.125rem;
    padding: 0.125rem;
    border-radius: 50%;
    background: transparent;
    transition: background 0.3s ease-in-out;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  div[id='close-button-wrapper']:hover {
    background-color: ${colors.secondary.outlined.hovered};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    color: ${textColor.dark};

    p {
      font-size: 1rem;
      padding: 0;
      margin: 0;
    }

    h3 {
      font-weight: 500;
      margin: 0;
      padding: 0;
    }
  }
`;

const fullScreenStyles = ({ full = false }: ContainerProps) =>
  full &&
  css`
    label: container-full--screen;

    width: 100%;

    div[id='close-button-wrapper'] {
      position: absolute;
      top: 0.9rem;
      right: 1rem;
    }
  `;

const successStyles = ({ type, accent }: ContainerProps) =>
  type === 'success' &&
  css`
    label: container-type--success;

    background: ${colors.success.outlined.hovered};
    ${accent && `border-${accent}: 4px solid ${colors.success.normal.default}`};

    svg {
      color: ${colors.success.normal.default};
    }
  `;

const warningStyles = ({ type, accent }: ContainerProps) =>
  type === 'warning' &&
  css`
    label: container-type--warning;

    background: ${colors.warning.outlined.hovered};
    ${accent && `border-${accent}: 4px solid ${colors.warning.normal.default}`};

    svg {
      color: ${colors.warning.normal.default};
    }
  `;

const errorStyles = ({ type, accent }: ContainerProps) =>
  type === 'error' &&
  css`
    label: container-type--error;

    background: ${colors.danger.outlined.hovered};
    ${accent && `border-${accent}: 4px solid ${colors.danger.normal.default}`};

    svg {
      color: ${colors.danger.normal.default};
    }
  `;

const withTitleStyles = ({ title }: ContainerProps) =>
  title &&
  css`
    label: container-title;

    align-items: flex-start !important;
  `;

export const Container = styled('div')<ContainerProps>(
  container,
  fullScreenStyles,
  withTitleStyles,
  successStyles,
  warningStyles,
  errorStyles
);
