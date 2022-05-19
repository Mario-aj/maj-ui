import React from 'react';
import { IconType } from 'react-icons';
import { MdCheck, MdSend } from 'react-icons/md';
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
  children: 'This is an info message',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  children: 'This is a success message',
  type: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'This is a warning message',
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  children: 'This is an error message',
  type: 'error',
};

export const AccentAlert = Template.bind({});
AccentAlert.args = {
  children: 'This is an warning message with left accent',
  type: 'warning',
  accent: 'left',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  children: 'This is an error message with title',
  type: 'error',
  title: 'Error title',
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  children: 'This is an error message with close button',
  type: 'error',
  closeFn: () => {
    alert('Close button clicked');
  },
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  children: 'This is an error message with close button',
  type: 'success',
  icon: (props: IconType) => <MdCheck {...props} />,
};

export const Custom = Template.bind({});
Custom.args = {
  children: (
    <div>
      <MdSend />
      <h1>Message sent</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        ullam vitae, fuga ex quam exercitationem voluptates similique, corporis
        porro minima voluptas, doloremque quasi officia architecto culpa unde
        commodi dicta nulla.
      </p>
    </div>
  ),
  type: 'success',
  noIcon: true,
  closeFn: () => alert('Close button clicked'),
};
