'use strict';

const {
  name, uint, bigInt, access, expression,
  description, displayName
} = require('./primitive.js');
const field = require('./field.js');

const register = {
  type: 'object',
  title: 'Register',
  required: ['name', 'addressOffset', 'size'],
  properties: {
    name,
    addressOffset: {oneOf: [expression, uint]}, // in memoryMaps[?].addressUnitBits
    size: {oneOf: [expression, uint]}, // regWidth in bits
    access: access,
    displayName,
    description,
    fields: {
      type: 'array',
      uniqueItemProperties: ['name'],
      items: field
    },
    resetValue: bigInt,
    resetMask: bigInt
  }
};

module.exports = register;
