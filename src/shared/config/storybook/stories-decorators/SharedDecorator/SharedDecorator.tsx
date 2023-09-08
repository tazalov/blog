import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const SharedDecorator = (Story: StoryFn) => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',
  }}
  >
    <Story />
  </div>
);
