/*
* Это файлик с типами, которые используются во всей папке config > build
*/

// ? Тут у нас типы для поля mode (buildWebpackConfig.ts)
export type BuildMode = 'development' | 'production'

// ? Тут у нас типы для поля path (buildWebpackConfig.ts)
export interface BuildPath {
  entry: string
  build: string
  html: string
  src: string
}

/*
* Тип для переменных окружения (environment variables), которые мы используем в package.json ключ scripts:
! "start": "webpack serve --env port=3000",
! "build:prod": "webpack --env mode=production",
! "build:dev": "webpack --env mode=development"
* Эти переменные по итогу попадут в нашу функцию из webpack.config.ts
*/
export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
}

/*
 ? Здесь у нас тип для объекта, который мы прокидываем в наши функции при создании конфига
 ? Он хранит основные поля, которые могут пригодится при формировании конфига
 ! Мы формируем такой объект в webpack.config.ts
*/
export interface BuildOptions {
  mode: BuildMode
  paths: BuildPath
  isDev: boolean
  port: number
  apiUrl: string
  project: 'storybook' | 'frontend' | 'jest'
}
