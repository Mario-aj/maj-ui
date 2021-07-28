import React, { useState } from 'react';

import { Modal, ModalProps } from '.';
import docs from './Modal.doc.mdx';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: docs,
    },
    layout: 'centered',
  },
  argTypes: {
    children: 'Welcome, this my project',
    className: '',
    isOpen: false,
    onClose: (): void => {},
  },
};

const ControlledModal = ({ isOpen }: ModalProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const items = new Array(20).fill(0);

  return (
    <>
      <button
        className="px-3 py-2 text-white bg-green-500 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Click to open modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {items.map((_, index) => (
          <div className="p-2 mb-2 border-b border-gray-500 rounded-md shadow-inner">
            item {index}
          </div>
        ))}
      </Modal>
    </>
  );
};

const BaseModal = ({ isOpen, children }: ModalProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  return (
    <div>
      <button
        className="px-3 py-2 text-white bg-green-500 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Click to open modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {children}
      </Modal>
    </div>
  );
};

export const Base = (args: ModalProps): JSX.Element => <BaseModal {...args} />;

Base.args = {
  isOpen: false,
  children: 'This a basic modal use!',
};

export const WithScroll = (args: ModalProps): JSX.Element => (
  <ControlledModal {...args} />
);
WithScroll.args = {
  isOpen: false,
};
