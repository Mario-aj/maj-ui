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
  intent: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  intent: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'warning',
  intent: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'danger',
  intent: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'success',
  intent: 'success',
};

export const None = Template.bind({});
None.args = {
  label: 'none',
  intent: 'none',
};

export const Icon = Template.bind({});
Icon.args = {
  label: '',
  intent: 'primary',
  icon: <AiOutlineHome />,
};
