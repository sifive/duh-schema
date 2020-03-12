'use strict';

const {id, uint, int, access, expression} = require('./primitive.js');
const field = require('./field.js');

const register = {
  type: 'object',
  required: ['name', 'addressOffset', 'size'],
  properties: {
    name: id,
    addressOffset: {oneOf: [expression, uint]}, // in memoryMaps[?].addressUnitBits
    size: {oneOf: [expression, uint]}, // regWidth in bits
    access: access,
    displayName: { type: 'string' },
    description: { type: 'string' },
    fields: {
      type: 'array',
      items: field
    },
    resetValue: int // spiritual
  }
};

module.exports = register;
