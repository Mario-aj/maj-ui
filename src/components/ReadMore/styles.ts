import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { textColor } from '../../styles';

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  showMore: boolean;
};

const container = () => css`
  label: container;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  button {
    font-size: 0.875rem;
  }
`;

const textStyle = () => css`
  label: container__text;

  color: ${textColor.dark};

  font-weight: 400;
  line-height: 1.75;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;

  .dots {
    display: inline;
  }

  .secondary-text {
    display: none;
  }
`;

const textStyleShowMore = ({ showMore }: TextProps) =>
  showMore &&
  css`
    label: container__text--show-more;

    .dots {
      display: none;
    }

    .secondary-text {
      display: inline;
    }
  `;

export const Container = styled('div')(container);
export const Text = styled('p')<TextProps>(textStyle, textStyleShowMore);
