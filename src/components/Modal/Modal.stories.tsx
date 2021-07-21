import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Modal } from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    children: '',
    className: '',
  },
};

const Template: ComponentStory<typeof Modal> = (args: any) => (
  <Modal {...args} />
);

export const Base = Template.bind({});
Base.args = {};
