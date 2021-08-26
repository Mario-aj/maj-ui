import React from 'react';
import { Spinner, SpinnerProps } from '.';

import docs from './Spinner.doc.mdx';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      page: docs,
    },
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
