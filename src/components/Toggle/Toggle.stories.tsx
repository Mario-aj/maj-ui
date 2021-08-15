import React from 'react';
import { Toggle } from '.';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {},
};

export const ToggleDefault = (): JSX.Element => <Toggle />;
