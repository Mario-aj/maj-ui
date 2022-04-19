import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgressBar } from '.';

//@ts-ignore
import docs from './progress-bar.docs.mdx';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,

  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = args => (
  <div className="w-72">
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
  value: 18,
};
