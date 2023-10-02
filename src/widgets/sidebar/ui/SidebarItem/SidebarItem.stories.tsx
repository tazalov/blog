import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';
import MainIcon from '@/shared/assets/icons/main.svg';

const meta = {
  title: 'widgets/Sidebar/SidebarItem', // change
  component: SidebarItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},

} satisfies Meta<typeof SidebarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    collapsed: false,
    item: { path: '', text: 'Main', Icon: MainIcon },
  },
};
