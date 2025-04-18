import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTS from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        ignores: ['**/build/**', '**/node_modules/**'],
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: eslintPluginReact,
            '@typescript-eslint': eslintPluginTS,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
        },
    },
];