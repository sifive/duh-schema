'use strict';

const {name, uint, access} = require('./primitive.js');
const registerFile = require('./registerFile.js');

module.exports = {
  type: 'object',
  title: 'Memory map',
  required: ['name', 'addressBlocks'],
  properties: {
    name,
    addressUnitBits: {
      enum: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
      default: 8
    },
    addressBlocks: {
      type: 'array',
      uniqueItemProperties: ['name'],
      items: {
        type: 'object',
        title: 'Address block',
        required: ['name', 'baseAddress', 'range', 'width'],
        properties: {
          name,
          baseAddress: uint,
          range: uint,
          width: uint,
          usage: { enum: ['memory', 'register'] },
          volatile: { type: 'boolean' },
          access: access,
          registers: {
            type: 'array',
            uniqueItemProperties: ['name'],
            items: {$ref: 'defs#/register'}
          },
          registerFiles: {
            type: 'array',
            uniqueItemProperties: ['name'],
            items: registerFile
          }
        }
      }
    }
  }
};
