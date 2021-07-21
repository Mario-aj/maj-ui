import React, { useState } from 'react';
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

export const InterativeModal = (): JSX.Element => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const handleTransactionModalOpen = () => {
    setIsTransactionModalOpen(true);
  };

  const handleTransactionModalClose = () => {
    setIsTransactionModalOpen(false);
  };

  return (
    <div className="flex-col items-center justify-center w-full">
      <button
        className="px-2 py-1 text-white bg-red-400 rounded"
        onClick={handleTransactionModalOpen}
      >
        Open modal
      </button>
      <Modal
        isOpen={isTransactionModalOpen}
        onClose={handleTransactionModalClose}
      >
        <div>
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
    </div>
  );
};
