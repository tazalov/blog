import type { Meta, StoryObj } from '@storybook/react';
import {
  FormDecorator,
} from '@/shared/config/storybook/stories-decorators/FormDecorator/FormDecorator';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [FormDecorator],
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      control: false,
    },
  },

} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
  },
};
