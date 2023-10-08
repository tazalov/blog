import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { ProfileT } from '@/entities/profile';
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
};

describe('fetchProfileData async thunk', () => {
  it('set of actions for a successful request is correct', async () => {
    //* Создаем инстанс для тестирования
    const thunk = new TestAsyncThunk(fetchProfileData);

    //* Мокаем результат запроса
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));

    //* Вызываем санку (если нужно, то передаем в callThunk данные, с которым должна вызваться санка)
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profile);
  });

  it('set of actions for a erroneous request is correct', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Request execution error');
  });
});
