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
    checked: false,
    large: false,
    disabled: false,
  },
  argTypes: {
    checked: false,
    large: false,
    disabled: false,
  },
};

const Base = ({ checked, large, disabled }: ToggleProps) => {
  const [isActive, setIsActive] = React.useState(checked || false);

  return (
    <Toggle
      checked={isActive}
      large={large}
      disabled={disabled}
      onClick={() => setIsActive((state) => !state)}
    />
  );
};

export const Default = (args: ToggleProps): JSX.Element => <Base {...args} />;

Default.args = {
  checked: false,
  large: false,
  disabled: false,
};

export const Large = (args: ToggleProps): JSX.Element => <Base {...args} />;

Large.args = {
  checked: false,
  large: true,
  disabled: false,
};
