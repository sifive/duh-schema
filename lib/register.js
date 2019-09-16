'use strict';

const {id, uint, int, access} = require('./primitive.js');

const register = {
  type: 'object',
  required: ['name', 'addressOffset', 'size'],
  properties: {
    name: id,
    addressOffset: uint,
    size: uint,
    access: access,
    displayName: { type: 'string' },
    description: { type: 'string' },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        // required: ['bits'],
        properties: {
          bits: uint,
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
