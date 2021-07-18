import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Teste/Button",
  component: Button,
  parameters: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const Teste = Template.bind({});
Teste.args = {
  label: "click me!",
};
