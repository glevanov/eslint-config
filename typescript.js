module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        /* overrides and extends base config */
        'semi': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 'tab'],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': 'error',

        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', { 'multiline': { 'delimiter': 'none' }}],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'warn'
    },
}