import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const PagesDecorator = (Story: StoryFn) => (
  <div className="content-page">
    <div className="page-wrapper" style={{ height: '100vh', width: '100vh' }}>
      <Story />
    </div>
  </div>
);
