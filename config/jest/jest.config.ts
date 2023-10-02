/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  globals: {
    __IS_DEV__: true,
    __API__: '',
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  // Порядок важен, я в ахуе
  moduleNameMapper: {
    // ? Мокаем все импорты для .svg
    '\\.svg$': '<rootDir>/config/jest/jest-empty-component.tsx',
    // ? Добавляем поддержку scss для тестов
    '\\.(s?css)$': 'identity-obj-proxy',
    // ? Добавляем поддержку аллиасов для тестов
    '^@/(.+)': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  rootDir: '../../',
  //! добавляем такую штуку, чтобы в jest еще и можно было тестировать компоненты
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts'],
};
