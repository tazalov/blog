import type { Meta, StoryObj } from '@storybook/react';
import {
  SharedDecorator,
} from '@/shared/config/storybook/stories-decorators/SharedDecorator/SharedDecorator';
import { Text } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [SharedDecorator],
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
