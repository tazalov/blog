import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  it('with one params', () => {
    const params = getQueryParams({
      test: 'value',
    });

    expect(params).toBe('?test=value');
  });

  it('with many params', () => {
    const params = getQueryParams({
      test: 'value',
      test2: 'value2',
    });

    expect(params).toBe('?test=value&test2=value2');
  });

  it('undefined params', () => {
    const params = getQueryParams(({
      test: 'value',
      test2: undefined,
    }));

    expect(params).toBe('?test=value');
  });
});
