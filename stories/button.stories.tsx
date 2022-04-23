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
  label: 'PRIMARY',
  appearance: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'SECONDARY',
  appearance: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'WARNING',
  appearance: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'DANGER',
  appearance: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'SUCCESS',
  appearance: 'success',
};

export const None = Template.bind({});
None.args = {
  label: 'LIGHT',
  appearance: 'light',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  label: 'send',
  appearance: 'primary',
  startIcon: <MdSend />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  label: 'RECOMMEND',
  appearance: 'primary',
  endIcon: <MdRecommend />,
};

export const sizes = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '12px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button appearance="primary" label="small" size="sm" />
      <Button appearance="primary" label="medium" size="md" />
      <Button appearance="primary" label="large" size="lg" />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button appearance="primary" label="small" size="sm" outlined />
      <Button appearance="primary" label="medium" size="md" outlined />
      <Button appearance="primary" label="large" size="lg" outlined />
    </div>
  </div>
);
