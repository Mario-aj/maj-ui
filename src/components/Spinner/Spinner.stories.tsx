import React from 'react';
import { SPinner } from '.';

export default {
  title: 'Components/SPinner',
  component: SPinner,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {},
};

const Base = (): JSX.Element => {
  return <SPinner />;
};

export const Default = (): JSX.Element => <Base />;

Default.args = {};
