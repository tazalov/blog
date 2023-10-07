import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/user';
import { USER_LS_KEY } from '@/shared/const/localStorage';
import { ThunkConfig } from '@/app/providers/store';

interface LoginByUsernamePT {
  username: string
  password: string
}

/* enum LoginErrors {
  INVALID_DATA= 'invalid',
  SERVER_ERROR = 'server'
} */

/*
* Дорогой Илья! Здеся в дженерике 3 аргумент - это объект, в котором мы можем указать типы возвращаемых значений
* из методов thunkAPI (см. исходники createAsyncThunk)
*/

export const loginByUsername = createAsyncThunk<User, LoginByUsernamePT, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
      //* в экстра прокинули инстанс апи и навигейт, смотри store.ts
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error('error login');
      }

      //* типо храним токен в ЛС
      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));

      //* сетаем в другой стейт наш ответ с сервера
      dispatch(userActions.setAuthData(response.data));
      extra.navigate?.('/profile');

      return response.data;
    } catch (e) {
      return rejectWithValue('Invalid username or password');
    }
  },
);
