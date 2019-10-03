'use strict';

const {id, uint, int, access, expression} = require('./primitive.js');

const register = {
  type: 'object',
  required: ['name', 'addressOffset', 'size'],
  properties: {
    name: id,
    addressOffset: uint, // base >> log2(regWidth)
    size: uint, // regWidth
    access: access,
    displayName: { type: 'string' },
    description: { type: 'string' },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        required: ['bitOffset', 'bitWidth'],
        properties: {
          // bits: uint,
          bitOffset: {oneOf: [expression, uint]}, // base % regWidth
          bitWidth:  {oneOf: [expression, uint]}, // size
          name: id,
          desc: { type: 'string' },
          attr: { type: 'string' },
          access: access,
          resetValue: int
        }
      }
    }
  }
};

module.exports = register;
