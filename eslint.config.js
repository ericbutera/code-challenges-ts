import eslintPlugin from '@typescript-eslint/eslint-plugin'
import eslintParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintPluginYml from 'eslint-plugin-yml'

export default [
  ...eslintPluginYml.configs['flat/recommended'],
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: eslintParser,
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]
