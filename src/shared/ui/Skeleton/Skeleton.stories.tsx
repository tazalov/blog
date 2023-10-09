import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      control: false,
    },
    height: {
      description: 'Height skeleton, number - px, string - percents',
      control: 'number',
    },
    width: {
      description: 'Width skeleton, number - px, string - percents',
      control: 'number',
    },
    border: {
      description: 'Border radius skeleton, number - px, string - percents',
      control: 'number',
    },
  },

} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullWidth: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: '100px',
    height: '100px',
  },
  parameters: {
    layout: 'centered',
  },
};
