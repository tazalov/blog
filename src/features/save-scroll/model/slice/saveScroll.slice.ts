import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SaveScrollSchema } from '../types/SaveScrollSchema';

const initialState: SaveScrollSchema = {
  scroll: {},
};

export const saveScrollSlice = createSlice({
  name: 'saveScroll',
  initialState,
  reducers: {
    setScrollPos: (state, action: PayloadAction<{path: string, position: number}>) => {
      const { position, path } = action.payload;
      state.scroll[path] = position;
    },
  },
});

export const { actions: saveScrollActions } = saveScrollSlice;
export const { reducer: saveScrollReducer } = saveScrollSlice;
