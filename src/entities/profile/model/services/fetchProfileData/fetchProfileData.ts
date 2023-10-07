import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { ProfileT } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<ProfileT, void, ThunkConfig<string>>(
  'profile/loginByUsername',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      //* в экстра прокинули инстанс апи и навигейт, смотри store.ts
      const response = await extra.api.get<ProfileT>('/profile');

      return response.data;
    } catch (e) {
      return rejectWithValue('Invalid username or password');
    }
  },
);
