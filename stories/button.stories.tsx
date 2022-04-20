import React from 'react';
import { MdSend, MdRecommend } from 'react-icons/md';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../src';

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
  label: 'light',
  appearance: 'light',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  label: 'Send',
  appearance: 'primary',
  startIcon: <MdSend />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  label: 'Recommend',
  appearance: 'primary',
  endIcon: <MdRecommend />,
};
