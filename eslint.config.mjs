import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import testingLibrary from 'eslint-plugin-testing-library';
import unicorn from 'eslint-plugin-unicorn';

const ERROR = 2;
const OFF = 0;

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended, // Changed from strictTypeChecked to recommended
  unicorn.configs['flat/recommended'], // Changed from all to recommended
  perfectionist.configs['recommended-alphabetical'],
  importPlugin.flatConfigs.react,
  importPlugin.flatConfigs['react-native'],
  importPlugin.flatConfigs.typescript,
  react.configs.flat.recommended, // Changed from all to recommended
  react.configs.flat['jsx-runtime'],
  reactRefresh.configs.recommended,
  testingLibrary.configs['flat/react'],
  eslintConfigPrettier, // last
  {
    languageOptions: {
      globals: {
        __DEV__: 'readonly', // define it as a global variable
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
      perfectionist: {
        partitionByComment: true,
        type: 'alphabetical',
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    ...reactHooks.configs.recommended,
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
      '@typescript-eslint/dot-notation': OFF, // Relaxed
      '@typescript-eslint/no-empty-function': OFF,
      '@typescript-eslint/no-explicit-any': OFF, // Allow any type when needed
      '@typescript-eslint/no-unsafe-assignment': OFF, // Relaxed type checking
      '@typescript-eslint/no-unsafe-call': OFF, // Relaxed type checking
      '@typescript-eslint/no-unsafe-member-access': OFF, // Relaxed type checking
      '@typescript-eslint/no-unsafe-return': OFF, // Relaxed type checking
      '@typescript-eslint/restrict-template-expressions': OFF,
      'import/no-unresolved': OFF, // handled by TypeScript
      'no-console': OFF, // Allow console logs
      'no-magic-numbers': OFF, // Disable magic numbers rule
      'perfectionist/sort-imports': OFF, // Disable automatic import sorting for more flexibility

      'react-refresh/only-export-components': OFF,
      'react/forbid-component-props': OFF,
      'react/function-component-definition': [ // Allow arrow functions for components
        ERROR,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', '.jsx'] }],
      'react/jsx-max-depth': OFF, // No depth limit
      'react/jsx-no-bind': OFF,
      'react/jsx-no-literals': OFF,
      'react/jsx-no-useless-fragment': OFF, // Allow <></> fragments
      'react/jsx-props-no-spreading': OFF,
      'react/jsx-sort-props': OFF, // Handled by perfectionist
      'react/no-multi-comp': OFF,
      'react/no-unescaped-entities': OFF,
      'react/prop-types': OFF, // Not needed with TypeScript
      'react/require-default-props': OFF, // Less strict about default props
      'unicorn/filename-case': OFF,
      'unicorn/no-keyword-prefix': OFF,
      'unicorn/no-null': OFF, // Allow null usage
      'unicorn/no-useless-undefined': OFF,
      'unicorn/prefer-top-level-await': OFF, // not valid on RN for the moment
      'unicorn/prevent-abbreviations': OFF, // Allow common abbreviations like props, params, etc.
    },
  },
  {
    files: ['**/theme/*.ts'],
    rules: {
      'no-magic-numbers': OFF,
    },
  },
  {
    files: ['*.conf.js', '*.config.js', '*.setup.js'],
    rules: {
      '@typescript-eslint/no-require-imports': OFF,
      '@typescript-eslint/no-unsafe-assignment': OFF,
      '@typescript-eslint/no-unsafe-call': OFF,
      'no-undef': OFF,
      'unicorn/prefer-module': OFF,
    },
  },
  {
    files: ['**/*.spec.{js,ts,jsx,tsx}', '**/*.test.{js,ts,jsx,tsx}'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
    },
  },
  {
    ignores: ['plugins/**'],
  },
);
