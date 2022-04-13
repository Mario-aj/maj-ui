import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  appearance: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  appearance: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'warning',
  appearance: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'danger',
  appearance: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'success',
  appearance: 'success',
};

export const None = Template.bind({});
None.args = {
  label: 'none',
  appearance: 'none',
};

export const Icon = Template.bind({});
Icon.args = {
  label: '',
  appearance: 'primary',
  icon: <AiOutlineHome />,
};
