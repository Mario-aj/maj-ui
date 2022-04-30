import React from 'react';
import { IconType } from 'react-icons';
import { MdCheck } from 'react-icons/md';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AlertMessage } from '.';

export default {
  title: 'Components/AlertMessage',
  component: AlertMessage,
} as ComponentMeta<typeof AlertMessage>;

const Template: ComponentStory<typeof AlertMessage> = args => (
  <AlertMessage {...args} />
);

export const Info = Template.bind({});
Info.args = {
  message: 'This is an info message',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success message',
  type: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message',
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error message',
  type: 'error',
};

export const AccentAlert = Template.bind({});
AccentAlert.args = {
  message: 'This is an warning message with left accent',
  type: 'warning',
  accent: 'left',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  message: 'This is an error message with title',
  type: 'error',
  title: 'Error title',
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  message: 'This is an error message with close button',
  type: 'error',
  closeFn: () => {
    alert('Close button clicked');
  },
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  message: 'This is an error message with close button',
  type: 'success',
  icon: (props: IconType) => <MdCheck {...props} />,
  onClose: undefined,
};
