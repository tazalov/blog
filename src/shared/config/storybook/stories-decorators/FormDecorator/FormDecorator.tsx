import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const FormDecorator = (Story: StoryFn) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  }}
  >
    <Story />
  </div>
);
