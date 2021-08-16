import React from 'react';
import { Toggle, ToggleProps } from '.';
import docs from './Toggle.doc.mdx';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      page: docs,
    },
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
  const [isActive, setIsActive] = React.useState(active || false);

  return (
    <Toggle
      active={isActive}
      large={large}
      onClick={() => setIsActive((state) => !state)}
    />
  );
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
