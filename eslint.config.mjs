// @ts-check
import antfu from '@antfu/eslint-config';

export default antfu(
    {
        react: true,
        isInEditor: true,
        formatters: true,
        stylistic: {
            indent: 4,
            quotes: 'single',
            semi: true,
        },
        typescript: {
            overrides: {
                'ts/consistent-type-definitions': ['error', 'type'],
            },
        },
        ignores: [
            '.czrc',
            '.versionrc',
            '.prettierrc',
            '.husky',
            'environments',
        ],
        yaml: true,
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            'style/jsx-max-props-per-line': ['error', { maximum: 1 }],
        },
    },
    {
        rules: {
            'yaml/indent': ['error', 4],
            'node/prefer-global/process': 'off',
            'antfu/top-level-function': 'off',
        },
    },
);
