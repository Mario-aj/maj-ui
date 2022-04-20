import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { SpinnerProps } from '.';
import { colors } from '../../styles';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<SpinnerProps, 'appearance' | 'size'>;

const sizes = {
  sm: '1.5rem',
  md: '2.5rem',
  lg: '4rem',
  xl: '5rem',
  '2xl': '6rem',
  '3xl': '7rem',
};

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const container = ({ size = 'md', appearance }: ContainerProps) => css`
  label: container;

  width: ${sizes[size]};
  height: ${sizes[size]};
  border: 2px rgb(209 213 219) solid;
  border-radius: 50%;
  border-right-color: ${colors[appearance].normal.default};
  animation: ${spinner} 0.7s linear infinite;
`;

export const Container = styled('div')<ContainerProps>(container);
