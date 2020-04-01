'use strict';

const {
  id, int, description, displayName
} = require('./primitive.js');

const enumeratedValue = {
  type: 'object',
  required: ['name', 'value'],
  properties: {
    name: id,
    description,
    displayName,
    // usage
    value: int
  }
};

const enumeratedValues = {
  type: 'array',
  items: enumeratedValue
};

module.exports = enumeratedValues;
