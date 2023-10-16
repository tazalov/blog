import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    code: {
      description: 'String with code & formatting',
      control: 'text',
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    code: 'const meta = {\n'
        + "  title: 'story/Code',\n"
        + '  component: Code,\n'
        + '  parameters: {\n'
        + "    layout: 'centered',\n"
        + '  },\n'
        + '  argTypes: {},\n'
        + '\n'
        + '} satisfies Meta<typeof Code>;',
  },
};
