module.exports = {
    root: true,
    extends: [
        '@semantic-pie/eslint-config',
        '@semantic-pie/eslint-config/prettier',
    ],
    parserOptions: {
        project: './tsconfig.json',
    }
}
