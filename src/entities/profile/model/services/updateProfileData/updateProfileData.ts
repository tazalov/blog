import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { ProfileT } from '../../types/profileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<ProfileT, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<ProfileT>('/profile', formData);

      return response.data;
    } catch (e) {
      return rejectWithValue('Invalid username or password');
    }
  },
);
