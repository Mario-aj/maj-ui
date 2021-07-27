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

const BaseModal = (args: ModalProps) => <Modal {...args} />;

const ControlledModal = ({ isOpen }: ModalProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  return (
    <>
      <button
        className="px-2 py-1 text-white bg-red-400 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Open modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="mb-4">
          <header>
            <p>Income</p>
          </header>
          <strong>$1000,00</strong>
        </div>

        <div>
          <header>
            <p>Outcome</p>
          </header>
          <strong>-$2000,00</strong>
        </div>
      </Modal>
    </>
  );
};

export const Base = (args: ModalProps): JSX.Element => (
  <>
    <h1>play with controller 'isOpen' below</h1>
    <BaseModal {...args} />
  </>
);

Base.args = {
  isOpen: false,
  children: 'This a basic modal use!',
};

export const Controlled = (args: ModalProps): JSX.Element => (
  <ControlledModal {...args} />
);
Controlled.args = {
  isOpen: false,
};
