import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      // `ecmaVersion` was declared here as 2020 AND as 'latest' below; the
      // parserOptions one wins, so the outer value was dead.
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // Core no-unused-vars cannot see JSX, so an identifier used only as
      // <Foo /> reads as unused. This rule is what teaches it otherwise. Without
      // it the config needed varsIgnorePattern '^([A-Z_]|motion$)' to stay
      // quiet — which also masked 20 dead `React` imports. With the plugin, the
      // pattern narrows to deliberate throwaways and real dead code surfaces.
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
