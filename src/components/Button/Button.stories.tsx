import React from 'react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: 'string',
    type: 'string',
  },
};

const BaseButton = ({ label, type }: ButtonProps): JSX.Element => (
  <Button
    label={label}
    type={type}
    onClick={() => console.log('event click')}
  />
);

export const Primary = (args: ButtonProps): JSX.Element => (
  <BaseButton {...args} />
);
Primary.args = {
  label: 'Primary',
  type: 'button',
};
