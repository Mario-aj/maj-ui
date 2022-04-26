import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReadMore } from '../src';

export default {
  title: 'Components/ReadMore',
  component: ReadMore,
} as ComponentMeta<typeof ReadMore>;

const Template: ComponentStory<typeof ReadMore> = args => (
  <div style={{ width: 450 }}>
    <ReadMore {...args} />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores rerum cumque fugiat numquam molestias perferendis atque, veritatis omnis cupiditate nisi ipsam et ab suscipit quae minima quasi ex tenetur maxime? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores rerum cumque fugiat numquam molestias perferendis atque, veritatis omnis cupiditate nisi ipsam et ab suscipit quae minima quasi ex tenetur maxime?',
};
