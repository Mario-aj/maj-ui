import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Modal, ModalProps } from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    children: '',
    className: '',
    isOpen: false,
    onClose: (): void => {},
  },
};

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: 'Welcome to my modal component',
  isOpen: true,
};
