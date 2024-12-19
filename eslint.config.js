import eslintPlugin from '@typescript-eslint/eslint-plugin'
import eslintPluginYml from 'eslint-plugin-yml'

export default [
  ...eslintPluginYml.configs['flat/recommended'],
  {
    files: ['**/*.{ts}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 'latest',
      },
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
]
