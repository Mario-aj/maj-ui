import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, textColor } from '../../styles';

const container = () => css`
  label: container;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  button {
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.primary.normal.default};
    font-weight: 500;
    line-height: 1.75;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;

    transition: filter 300ms ease-in-out;
  }

  button:hover {
    filter: brightness(1.2);
  }

  p {
    color: ${textColor.dark};
    font-weight: 400;
    line-height: 1.75;
    font-size: 1rem;
    line-height: 1.25rem;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }
`;

export const Container = styled('div')(container);
