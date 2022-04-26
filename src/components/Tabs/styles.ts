import * as React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { TabsProps } from '.';

import { textColor, colors } from '../../shared/styles';

type TabProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<TabsProps, 'indicatorColor' | 'appearance'> & {
    isActive: boolean;
    disabled: boolean;
  };

const containerStyle = () => css`
  label: container;

  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;

  margin-bottom: 16px;
`;

const tabStyle = () => css`
  label: container__tab;

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

const tabActiveStyle = ({
  isActive,
  color,
  appearance = 'primary',
  indicatorColor,
}: TabProps) =>
  isActive &&
  css`
    label: container__tab--active;

    color: ${color || colors[appearance].normal.default};

    div[class*='tab-indicator'] {
      label: container__tab--indicator;

      display: block;
      position: relative;
      bottom: -8px;
      width: 100%;
      height: 2px;
      left: 0;
      background-color: ${indicatorColor || colors[appearance].normal.default};
      border-radius: 2px;
      transition: all 300ms ease-in-out;
    }
  `;

const tabDisabledStyle = ({ disabled }: TabProps) =>
  disabled &&
  css`
    label: container__tab--disabled;

    opacity: 0.5;
    cursor: not-allowed;
  `;

export const Container = styled('div')(containerStyle);
export const Tab = styled('div')(tabStyle, tabActiveStyle, tabDisabledStyle);
