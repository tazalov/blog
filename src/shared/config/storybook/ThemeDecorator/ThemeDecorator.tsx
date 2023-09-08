import { StoryFn, StoryContext } from '@storybook/react';
import { ThemeProvider, useTheme } from '@/app/providers/theme';

export const ThemeDecorator = (StoryComponent: StoryFn, context: StoryContext) => {
  const { theme } = useTheme();
  const { globals } = context;
  return (
    <ThemeProvider>
      <div className={`app ${(globals.theme || theme)}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
