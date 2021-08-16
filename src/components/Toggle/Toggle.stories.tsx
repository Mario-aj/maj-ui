import React from 'react';
import { Toggle, ToggleProps } from '.';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  args: {
    active: false,
  },
  argTypes: {
    active: 'bool',
  },
};

export const ToggleDefault = (args: ToggleProps): JSX.Element => (
  <Toggle {...args} />
);

ToggleDefault.args = {
  active: false,
};
