import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { ProfileT, ValidateProfileData } from '@/entities/profile';
import avatar from '@/shared/assets/tests/user.jpg';
import { Currency } from '@/entities/currency';
import { Countries } from '@/entities/country';

const profile: ProfileT = {
  username: 'myusername',
  first: 'Sam',
  lastname: 'Smith',
  avatar,
  age: 20,
  city: 'Moscow',
  currency: Currency.EUR,
  country: Countries.Russia,
  id: '1',
};

describe('updateProfileData async thunk', () => {
  it('set of actions for a successful request is correct', async () => {
    //* Создаем инстанс для тестирования
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile,
      },
    });

    //* Мокаем результат запроса
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }));

    //* Вызываем санку (если нужно, то передаем в callThunk данные, с которым должна вызваться санка)
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profile);
  });

  it('set of actions for a erroneous request is correct', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileData.SERVER_ERROR]);
  });

  it('set of actions for a erroneous validate is correct', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profile, lastname: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileData.INCORRECT_USER_DATA]);
  });
});
