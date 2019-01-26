'use strict';

const {id, uint, access} = require('./primitive.js');

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
        required: ['name', 'bitOffset', 'bitWidth'],
        properties: {
          name: id,
          bitOffset: uint,
          bitWidth: uint,
          displayName: { type: 'string' },
          description: { type: 'string' }
        }
      }
    }
  }
};

module.exports = register;
