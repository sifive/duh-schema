'use strict';

const meta = require('./meta.js');

const props = {
  type: 'object',
  patternProperties: {
    '.+': meta
  }
};

module.exports = props;
