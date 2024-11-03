// .eslintrc.js
module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      // Turn off all common rules
      'no-unused-vars': 'off',
      'no-param-reassign': 'off',
      'react/react-in-jsx-scope': 'off', // Disable React scope rule
      '@typescript-eslint/no-unused-vars': 'off', // Disable TypeScript unused vars
      '@typescript-eslint/no-explicit-any': 'off', // Disable explicit any rule
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  };