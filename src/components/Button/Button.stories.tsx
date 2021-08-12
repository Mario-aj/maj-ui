/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
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
  args: {
    label: 'Default',
    type: 'button',
    outline: false,
    disabled: false,
    full: false,
    iconRight: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    iconRight: false,
    full: false,
  },
};

const BaaseButton = (args: ButtonProps) => <Button {...args} />;

export const Primary = (args: ButtonProps): JSX.Element => (
  <BaaseButton {...args} />
);
Primary.args = { intent: 'primary', label: 'Primary' };

export const Secondary = (args: ButtonProps): JSX.Element => (
  <BaaseButton {...args} />
);
Secondary.args = { intent: 'secondary', label: 'Secondary' };

export const Success = (args: ButtonProps): JSX.Element => (
  <BaaseButton {...args} />
);
Success.args = { intent: 'success', label: 'Success' };

export const Warning = (args: ButtonProps): JSX.Element => (
  <BaaseButton {...args} />
);
Warning.args = { intent: 'warning', label: 'Warning' };

export const Danger = (args: ButtonProps): JSX.Element => (
  <BaaseButton {...args} />
);
Danger.args = { intent: 'danger', label: 'Danger' };

export const Dark = (args: ButtonProps): JSX.Element => (
  <BaaseButton {...args} />
);
Dark.args = { intent: 'dark', label: 'Dark' };

export const WithIcon = (args: ButtonProps): JSX.Element => (
  <BaaseButton {...args} />
);
WithIcon.args = {
  intent: 'primary',
  label: 'icon',
  icon: FaArrowRight,
  iconRight: false,
};

export const WithLoadingState = (args: ButtonProps): JSX.Element => (
  <BaaseButton {...args} />
);
WithLoadingState.args = {
  intent: 'primary',
  label: 'loading',
  loading: true,
  disabled: true,
};

export const TwitterButton = (args: ButtonProps): JSX.Element => (
  <BaaseButton {...args} />
);
TwitterButton.args = {
  intent: 'primary',
  label: 'Twitter Button',
  twitterButton: true,
};
