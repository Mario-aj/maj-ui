import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tabs } from '.';

type TabProps = {
  label: string | React.ReactNode;
  id: string | number;
};

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    { label: 'ITEM ONE', id: '1' },
    { label: 'ITEM TWO', id: '2' },
    { label: 'ITEM THREE', id: 3 },
  ],
  selectedTab: '2',
};

export const WithDisabledTab = Template.bind({});
WithDisabledTab.args = {
  tabs: [
    { label: 'ITEM ONE', id: '1' },
    { label: 'ITEM TWO', id: '2' },
    { label: 'ITEM THREE', id: 3 },
  ],
  selectedTab: '1',
  disabledTabs: [3],
};

export const GetSelecteTab = () => {
  const [selectedTab, setSelectedTab] = React.useState<TabProps>({
    label: 'ITEM ONE',
    id: '1',
  });

  const handleSelect = (selectedTab: TabProps) => {
    setSelectedTab(selectedTab);
  };

  return (
    <div>
      <Tabs
        tabs={[
          { label: 'ITEM ONE', id: '1' },
          { label: 'ITEM TWO', id: '2' },
          { label: 'ITEM THREE', id: 3 },
        ]}
        selectedTab="1"
        onSelect={handleSelect}
      />
      <p style={{ marginTop: 20 }}>Selected tab: {selectedTab.label}</p>
    </div>
  );
};
