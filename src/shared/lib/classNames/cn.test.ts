import { cn } from './cn';

describe('classNames', () => {
  test('with only first param', () => {
    const result = cn('someClass');
    const expected = 'someClass';
    expect(result).toBe(expected);
  });

  test('with additional class', () => {
    const result = cn('someClass', {}, ['className1', 'className2']);
    const expected = 'someClass className1 className2';
    expect(result).toBe(expected);
  });

  test('with mods', () => {
    const result = cn('someClass', {
      hovered: true,
      active: true,
    }, ['className1', 'className2']);
    const expected = 'someClass hovered active className1 className2';
    expect(result).toBe(expected);
  });

  test('with mods falsy', () => {
    const result = cn('someClass', {
      hovered: true,
      active: false,
    }, ['className1', 'className2']);
    const expected = 'someClass hovered className1 className2';
    expect(result).toBe(expected);
  });

  test('with mods undefined', () => {
    const result = cn('someClass', {
      hovered: undefined,
      active: true,
    }, ['className1', 'className2']);
    const expected = 'someClass active className1 className2';
    expect(result).toBe(expected);
  });
});
