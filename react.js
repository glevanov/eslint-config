module.exports = {
    extends: [
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react/no-string-refs': 'off',
        'react/no-unknown-property': 'off',
        'react/jsx-wrap-multilines': [
            'error',
            {
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'return': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line',
            },
        ],
        'react/jsx-max-props-per-line': [
            'error',
            {
                'maximum': 2,
            },
        ],
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline',
        ],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-max-depth': [
            'warn',
            {
                'max': 5,
            },
        ],
        'react/jsx-curly-spacing': [
            'warn',
            'never',
        ],
        'react/jsx-equals-spacing': [
            'error',
            'never',
        ],
        'react/jsx-curly-brace-presence': [
            'error',
            {
                'props': 'always',
                'children': 'ignore',
            },
        ],
    },
    'settings': {
        'react': {
            'version': 'detect',
        },
        'import/ignore': [
            'node_modules',
        ],
    },
}