import * as React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TabsProps } from '.';

import { textColor, colors } from '../../styles';

type ItemProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<TabsProps, 'indicatorColor' | 'appearance'> & {
    isActive: boolean;
  };

type ItemIndicatorProps = Pick<
  ItemProps,
  'appearance' | 'indicatorColor' | 'isActive'
>;

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
  padding: 0 1rem;
  position: relative;
  flex-shrink: 0;

  transition: all 300ms ease-in-out;
`;

const itemActiveStyle = ({
  isActive,
  color,
  appearance = 'primary',
}: ItemProps) =>
  isActive &&
  css`
    label: container__item--active;

    color: ${color || colors[appearance].normal.default};
  `;

const itemIndicatorStyle = ({
  indicatorColor,
  appearance = 'primary',
  isActive,
}: ItemIndicatorProps) =>
  isActive &&
  css`
    label: container__item--indicator;

    display: block;
    position: relative;
    bottom: -12px;
    width: 100%;
    height: 2px;
    left: 0;
    background-color: ${indicatorColor || colors[appearance].normal.default};
    border-radius: 4px;
    transition: all 300ms ease-in-out;
  `;

export const Container = styled('div')(containerStyle);
export const Item = styled('div')(itemStyle, itemActiveStyle);
export const ItemIndicator = styled('div')(itemIndicatorStyle);
