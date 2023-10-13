import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme, ButtonSize } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      description: 'Label text button or other React-component.',
      control: 'text',
    },
    size: {
      description: 'Makes size for button.',
      options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL],
      control: 'radio',
    },
    theme: {
      description: 'The theme of the button that we pass from the parent.',
      control: false,
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
    square: {
      description: 'Makes the button square. There are 3 sizes available.',
      control: false,
    },
    disabled: {
      description: 'Changes opacity style to 0.5',
      control: 'boolean',
    },
  },

} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: ButtonTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: ButtonTheme.SECONDARY,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
  },
};

export const Action: Story = {
  args: {
    children: 'Cancel',
    theme: ButtonTheme.OUTLINE_ACTION,
  },
};

export const Clear: Story = {
  args: {
    children: 'I have main color',
    theme: ButtonTheme.CLEAR,
  },
};

export const InvertedClear: Story = {
  args: {
    children: 'I have inverted color',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Background: Story = {
  args: {
    children: 'I have main background color',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const InvertedBackground: Story = {
  args: {
    children: 'I have inverted background color',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};
