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
  progressValue: 40,
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
  progressValue: 78,
};

export const Success = Template.bind({});
Success.args = {
  appearance: 'success',
  progressValue: 69,
};

export const Warning = Template.bind({});
Warning.args = {
  appearance: 'warning',
  progressValue: 97,
};

export const Danger = Template.bind({});
Danger.args = {
  appearance: 'danger',
  progressValue: 18,
};

export const Light = Template.bind({});
Light.args = {
  appearance: 'light',
  progressValue: 18,
};
