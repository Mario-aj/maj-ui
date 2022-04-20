import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ProgressBarProps } from '.';

type WrapperProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<ProgressBarProps, 'size'>;

type ProgressProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<ProgressBarProps, 'appearance' | 'value'>;

const classes = {
  primary: '#5F91CC',
  secondary: '#969696',
  success: '#5BCA8A',
  warning: '#F0B858',
  danger: '#D6394C',
  light: '#fff',
};

const sizes = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
};

const wrapperStyle = ({ size = 'md' }: Pick<WrapperProps, 'size'>) => css`
  label: wrapper;

  width: 100%;
  height: 0.5rem;

  background: rgb(209 213 219);
  border-radius: 0.5rem;
  height: ${sizes[size]};
`;

const progressStyle = ({
  value,
  appearance,
}: Pick<ProgressProps, 'appearance' | 'value'>) => css`
  label: progress;

  height: 100%;
  width: ${value}%;

  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${classes[appearance]};
`;

export const Wrapper = styled('div')<WrapperProps>(wrapperStyle);
export const Progress = styled('div')<ProgressProps>(progressStyle);
