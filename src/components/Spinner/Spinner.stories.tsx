import React from 'react';
import { Spinner, SpinnerProps } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
};

const Base = ({ intent, size }: SpinnerProps): JSX.Element => {
  return <Spinner intent={intent} size={size} />;
};

export const Large = (args: SpinnerProps): JSX.Element => <Base {...args} />;

Large.args = {
  intent: 'secondary',
  size: 'lg',
};

export const Medium = (args: SpinnerProps): JSX.Element => <Base {...args} />;

Medium.args = {
  intent: 'secondary',
  size: 'md',
};

export const Small = (args: SpinnerProps): JSX.Element => <Base {...args} />;

Small.args = {
  intent: 'secondary',
  size: 'sm',
};
