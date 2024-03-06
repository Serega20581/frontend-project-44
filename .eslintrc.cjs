module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {/* eslint-disable no-console */
  /* eslint-disable no-param-reassign */
    /* eslint-disable no-plusplus */
    // eslint-disable-next-line no-param-reassign
    /* eslint-disable import/prefer-default-export */
    /* eslint-disable import/extensions */
  },
};
