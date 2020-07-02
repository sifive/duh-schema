'use strict';

const {name, uint, expression} = require('./primitive.js');

const registerFile = {
  type: 'object',
  title: 'Register file',
  required: ['name', 'addressOffset', 'range'],
  properties: {
    name,
    // accessHandles // ipxactish
    // isPresent // ipxactish
    // dim: uint
    addressOffset: {oneOf: [expression, uint]}, // in memoryMaps[?].addressUnitBits
    // parameters
    range: uint,
    registers: {
      type: 'array',
      uniqueItemProperties: ['name'],
      items: {$ref: 'defs#/register'}
    }
    // Handle recursive definitions
    // registerFiles: {
    //   type: 'array',
    //   items: registerFile
    // }
  }
};

module.exports = registerFile;
