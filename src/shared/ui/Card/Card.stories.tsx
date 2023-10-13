import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      description: 'Some React-component.',
      control: false,
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    children: (
      <>
        <Text title="I am a Card" text="Description" />
        <Text text="Lorem ipsum" />
        <Button>click me</Button>
      </>
    ),
  },
};
