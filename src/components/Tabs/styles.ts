import * as React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TabsProps } from '.';

import { textColor, colors } from '../../styles';

type ItemProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<TabsProps, 'indicatorColor' | 'appearance'> & {
    isActive: boolean;
  };

const containerStyle = () => css`
  label: container;

  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const itemStyle = () => css`
  label: container__item;

  color: ${textColor.dark};
  user-select: none;
  cursor: pointer;
  font-weight: 500;
  line-height: 1.75;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0.02857em;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  flex-shrink: 0;

  transition: all 300ms ease-in-out;

  span {
    display: inline-block;
    padding: 0 0.75rem;
  }
`;

const itemActiveStyle = ({
  isActive,
  color,
  appearance = 'primary',
  indicatorColor,
}: ItemProps) =>
  isActive &&
  css`
    label: container__item--active;

    color: ${color || colors[appearance].normal.default};

    div[class*='item-indicator'] {
      label: container__item--indicator;

      display: block;
      position: relative;
      bottom: -12px;
      width: 100%;
      height: 2px;
      left: 0;
      background-color: ${indicatorColor || colors[appearance].normal.default};
      border-radius: 2px;
      transition: all 300ms ease-in-out;
    }
  `;

export const Container = styled('div')(containerStyle);
export const Item = styled('div')(itemStyle, itemActiveStyle);
