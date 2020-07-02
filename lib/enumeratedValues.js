'use strict';

const {
  name, int, description, displayName
} = require('./primitive.js');

const enumeratedValue = {
  type: 'object',
  title: 'Enumerated values',
  required: ['name', 'value'],
  properties: {
    name,
    description,
    displayName,
    // usage
    value: int
  }
};

const enumeratedValues = {
  type: 'array',
  uniqueItemProperties: ['name'],
  items: enumeratedValue
};

module.exports = enumeratedValues;
