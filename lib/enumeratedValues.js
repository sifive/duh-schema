'use strict';

const {id, int} = require('./primitive.js');

const enumeratedValue = {
  type: 'object',
  required: ['name', 'value'],
  properties: {
    name: id,
    description: { type: 'string' },
    displayName: { type: 'string' },
    // usage
    value: int
  }
};

const enumeratedValues = {
  type: 'array',
  items: enumeratedValue
};

module.exports = enumeratedValues;
