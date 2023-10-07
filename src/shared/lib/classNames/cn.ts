/*
 * cls - строковый главный класс (внешний вид компонента)
 * mods - класс, который будет применятся в зависимости от
 * значения, если в объекте у ключа будет true, то мы добавим
 * ключ в качестве класса
 * additional - прочие классы (чаще всего приходят из props и
 * отвечают за позиционирование компонента)
 * */

// ? Пример cn('app', {hovered: true, active: false}, ['secondary', 'error']) - "app hovered secondary error"

//! Record - generic, указывает на то, что в mods у нас будет объект с
//! ключом string, а значение может быть boolean | string
export type Mods = Record<string, boolean | string | undefined>

export const cn = (cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string => {
  const clsMods = Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className);
  return [
    cls,
    ...clsMods,
    ...additional.filter(Boolean),
  ].join(' ');
};
