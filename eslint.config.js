'use strict';

const base = require('@drom/eslint-config');
const globals = require('globals');

module.exports = [
  base,
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: globals.mocha
    }
  }
];
