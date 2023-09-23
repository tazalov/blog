import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from '@/entities/user';
import { USER_LS_KEY } from '@/shared/const/localStorage';

interface LoginByUsernamePT {
  username: string
  password: string
}

/*
* Дорогой Илья! Здеся в дженерике 3 аргумент - это объект, в котором мы можем указать типы возвращаемых значений
* из методов thunkAPI (см. исходники createAsyncThunk)
*/

export const loginByUsername = createAsyncThunk<User, LoginByUsernamePT, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      //* типо храним токен в ЛС
      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
      //* сетаем в другой стейт наш ответ с сервера
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.warn(e);
      return thunkAPI.rejectWithValue('Invalid username or password');
    }
  },
);
