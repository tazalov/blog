import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';

export const getScroll = (state: StateSchema) => state.saveScroll.scroll;

export const getScrollByPath = createSelector(
  getScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
