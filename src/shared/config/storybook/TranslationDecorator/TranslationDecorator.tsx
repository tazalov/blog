import { StoryFn, StoryContext } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { Suspense, useEffect } from 'react';
import i18n from '@/shared/config/i18n/i18n';

export const TranslationDecorator = (Story: StoryFn, context: StoryContext) => {
  const { globals } = context;

  useEffect(() => {
    i18n.changeLanguage(globals.locale);
  }, [globals.locale]);

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
