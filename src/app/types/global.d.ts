//Добавляем поддержку scss модулей для typescript
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  
  const classNames: IClassNames;
  export = classNames;
}
//Добавляем поддержку импорта svg для typescript
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'