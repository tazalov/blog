import { StoryFn, StoryContext } from '@storybook/react';
import { useEffect } from 'react';
import { ThemeProvider } from '@/app/providers/theme';

export const ThemeDecorator = (StoryComponent: StoryFn, context: StoryContext) => {
  const { globals } = context;

  useEffect(() => {
    document.body.className = globals.theme;
  }, [globals.theme]);

  return (
    <ThemeProvider>
      <div className="app">
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
