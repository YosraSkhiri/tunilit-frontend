module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'eslint-plugin-react', 'typescript-sort-keys', "simple-import-sort", "sort-destructure-keys", "drizzle"],
  rules: {
    "typescript-sort-keys/interface": [
      "error",
      "asc",
      { "caseSensitive": true, "natural": false, "requiredFirst": false }
    ],
    "sort-destructure-keys/sort-destructure-keys": 2,
    'react/jsx-sort-props': [
      'error',
      {
        "callbacksLast": true,
        "shorthandFirst": true,
        "multiline": "first",
        "ignoreCase": true,
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    "drizzle/enforce-delete-with-where": [
      "error",
      {
        "drizzleObjectName": [
          "db"
        ]
      }
    ],
    "drizzle/enforce-update-with-where": [
      "error",
      {
        "drizzleObjectName": [
          "db"
        ]
      }
    ]
  },
}
