import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  appearance: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  appearance: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  appearance: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  appearance: 'danger',
};

export const Sizes: ComponentStory<typeof Spinner> = () => (
  <div className="flex items-center gap-4">
    <Spinner appearance="primary" size="sm" />
    <Spinner appearance="success" size="md" />
    <Spinner appearance="danger" size="lg" />
  </div>
);
