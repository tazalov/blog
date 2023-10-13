module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'eslint-plugin-react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'react/jsx-props-no-spreading': 'warn',
    'no-unused-vars': 'warn',
    'no-empty-pattern': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'react/self-closing-comp': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
    ],
    'max-len': [2, { ignoreComments: true, code: 110 }],
    'no-undef': 'off',
    'react/no-array-index-key': 'warn',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  // ? Тутова переопределяем правила eslint для файлов, который подходят под регулярку
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: { 'i18next/no-literal-string': 'off', 'max-len': 'off' },
    },
    {
      files: ['**/src/**/*.slice.{ts,tsx}'],
      rules: { 'no-param-reassign': 'off' },
    },
  ],
};
