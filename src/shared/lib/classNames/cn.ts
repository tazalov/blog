/*
 * cls - строковый главный класс (внешний вид компонента)
 * mods - класс, который будет применятся в зависимости от значения, если в объекте у ключа будет true, то мы добавим ключ в качестве класса
 * additional - прочие классы (чаще всего приходят из props и отвечают за позиционирование компонента)
 * */

//? Пример cn('app', {hovered: true, active: true}, ['secondary', 'error'])

//! Record - generic, указывает на то, что в mods у нас будет объект с ключом string, а значение может быть boolean | string
type Mods = Record<string, boolean | string>

export const cn = (
    cls: string, mods: Mods = {}, additional: string[] = []): string => {
  const clsMods = Object.entries(mods).
      filter(([_, value]) => Boolean(value)).
      map(([cls, _]) => cls);
  return [
    cls,
    ...clsMods,
    ...additional.filter(Boolean),
  ].join(' ');
};


