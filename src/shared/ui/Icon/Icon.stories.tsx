import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';

const meta = {
  title: 'shared/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    Svg: {
      description: 'Svg component',
      control: false,
    },
  },

} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    Svg: EyeIcon,
  },
};

export const Example2: Story = {
  args: {
    Svg: CalendarIcon,
  },
};
