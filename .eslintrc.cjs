module.exports = {
    env: { browser: true, es2020: true, node: true, jest: true },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:jsx-a11y/recommended',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'prettier', 'react', 'react-hooks'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'react/react-in-jsx-scope': 0,
        'react-hooks/rules-of-hooks': 'error',
        'no-console': 0,
        'react/state-in-constructor': 0,
        indent: 0,
        'linebreak-style': 0,
        'react/prop-types': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'no-shadow': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 100,
                tabWidth: 4,
                semi: true,
                endOfLine: 'auto',
            },
        ],
    },
};
