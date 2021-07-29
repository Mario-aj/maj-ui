import React from 'react';
import { Button, ButtonProps } from '.';

import docs from './Button.doc.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      page: docs,
    },
  },
  argTypes: {
    label: 'string',
    type: 'string',
    disabled: false,
  },
};

const BaseButton = ({ label, type, ...props }: ButtonProps): JSX.Element => (
  <Button
    label={label}
    type={type}
    {...props}
    onClick={() => console.log('event click')}
  />
);

export const Primary = (args: ButtonProps): JSX.Element => (
  <BaseButton {...args} />
);
Primary.args = {
  label: 'Default',
  type: 'button',
  intent: 'secondary',
  disabled: false,
};
