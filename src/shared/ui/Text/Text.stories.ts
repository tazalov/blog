import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextAlign } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      description: 'Paragraph have large font and primary color (optional). ',
      control: 'text',
    },
    text: {
      description: 'Paragraph have small font and secondary color (optional). ',
      control: 'text',
    },
    theme: {
      description: 'The theme of the button that we pass from the parent.',
      control: 'radio',
    },
    align: {
      description: 'Value for change text-align property for title & text',
      control: 'select',
    },
  },

} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum',
  },
};

export const AlignLeft: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum',
    align: TextAlign.LEFT,
  },
};

export const AlignCenter: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum',
    align: TextAlign.CENTER,
  },
};

export const AlignRight: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum',
    align: TextAlign.RIGHT,
  },
};
