import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tabs } from '../src';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'ITEM ONE', id: '1' },
    { label: 'ITEM TWO', id: '2' },
    { label: 'ITEM THREE', id: 3 },
  ],
  selectedTab: '2',
};
