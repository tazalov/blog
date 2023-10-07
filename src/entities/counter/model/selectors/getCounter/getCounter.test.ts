import {
  getCounter,
} from '@/entities/counter/model/selectors/getCounter/getCounter';
import { StateSchema } from '@/app/providers/store';

/*
* DeepPartial - мы создали стейт в типом StateSchema, но для теста, нам не нужно указывать
* высе поля нашего глобального стейта, и DeepPartial нам это позволяет.
* Мы указывает только ту часть стейта, которая будет достаточна для работы нашего теста
* с селектором и затем передаем этот state в селектор, принудительно его приведя к типу
* глобального стейта
*/

describe('getCounter.test', () => {
  it('state getting is correct', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
