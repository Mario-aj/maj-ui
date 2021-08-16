import React, { useState } from 'react';
import { Toggle, ToggleProps } from '.';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  args: {
    active: false,
    large: false,
  },
  argTypes: {
    active: 'bool',
    large: 'bool',
  },
};

const Base = ({ active, large }: ToggleProps) => {
  const [isActive, setIsActive] = useState(active || false);

  return <Toggle active={isActive} large={large} />;
};

export const Default = (args: ToggleProps): JSX.Element => <Base {...args} />;

Default.args = {
  active: false,
  large: false,
};

export const Large = (args: ToggleProps): JSX.Element => <Base {...args} />;

Large.args = {
  active: false,
  large: true,
};
