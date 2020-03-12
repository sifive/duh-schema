'use strict';

const {id, uint, expression} = require('./primitive.js');
const register = require('./register.js');

const registerFile = {
  type: 'object',
  required: ['name', 'addressOffset', 'range'],
  properties: {
    name: id,
    // accessHandles // ipxactish
    // isPresent // ipxactish
    // dim: uint
    addressOffset: {oneOf: [expression, uint]}, // in memoryMaps[?].addressUnitBits
    // parameters
    range: uint,
    registers: {
      type: 'array',
      items: register
    },
    // Handle recursive definitions
    // registerFiles: {
    //   type: 'array',
    //   items: registerFile
    // }
  }
};

module.exports = registerFile;
