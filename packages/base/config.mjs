export default {
    extends: [
        'eslint:recommended',
        'plugin:compat/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:import/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'semi': 'off',
        '@typescript-eslint/semi': [
            'error',
            'always',
        ],
        'quotes': 'off',
        '@typescript-eslint/quotes': [
            'error',
            'single',
        ],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': [
            'error',
            'always-multiline',
        ],
        'arrow-parens': [
            'error',
            'always',
        ],
        'indent': 'off',
        '@typescript-eslint/indent': [
            'error',
            'tab',
        ],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': [
            'error',
            '1tbs',
        ],
        'curly': [
            'error',
            'multi-line',
        ],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': [
            'error',
            'always',
        ],
        'block-spacing': 'error',
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
            },
        ],
        'import/no-unresolved': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
            },
        ],
        'import/no-default-export': 'warn',
    },
}