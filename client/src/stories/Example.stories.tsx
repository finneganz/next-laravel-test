import React from 'react';
import { Story, Meta } from '@storybook/react';

import Example, { ExampleProps } from './Example';

export default {
  title: 'My/Button',
  component: Example,
} as Meta;

const Template: Story<ExampleProps> = (args) => <Example {...args} />;

export const ExampleButton = Template.bind({});
ExampleButton.args = {
  text: 'test',
  flag: true,
};
