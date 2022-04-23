import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProgressBar } from '../src';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = args => (
  <div style={{ width: 300 }}>
    <ProgressBar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  appearance: 'primary',
  value: 40,
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
  value: 78,
};

export const Success = Template.bind({});
Success.args = {
  appearance: 'success',
  value: 69,
};

export const Warning = Template.bind({});
Warning.args = {
  appearance: 'warning',
  value: 97,
};

export const Danger = Template.bind({});
Danger.args = {
  appearance: 'danger',
  value: 18,
};

export const Light = Template.bind({});
Light.args = {
  appearance: 'light',
  value: 45,
};

export const Sizes: ComponentStory<typeof ProgressBar> = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <ProgressBar appearance="primary" value={50} size="sm" />
    <ProgressBar appearance="success" value={50} size="md" />
    <ProgressBar appearance="danger" value={50} size="lg" />
    <ProgressBar appearance="warning" value={50} size="xl" />
  </div>
);
