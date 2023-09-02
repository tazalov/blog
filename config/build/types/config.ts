//mode
export type BuildMode = 'development' | 'production'

//path
export interface BuildPath {
  entry: string;
  build: string;
  html: string;
}

/*
Тип для переменных окружения (environment variables), которые мы используем
в package.json ключ scripts:
 "start": "webpack serve --env port=3000",
 "build:prod": "webpack --env mode=production",
 "build:dev": "webpack --env mode=development"
 
 Эти переменные по итогу попадут в нашу функцию из webpack.config.ts
*/
export interface BuildEnv {
  mode: BuildMode
  port: number
}

//options (тип для аргументов функций с loaders, plugins, ...)
export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
}

