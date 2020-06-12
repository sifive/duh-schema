'use strict';

const {name, uint, int, access, expression, description} = require('./primitive.js');
const enumeratedValues = require('./enumeratedValues.js');

const modifiedWriteValue = {
  description: 'manipulation of data written to a field',
  enum: [
    'oneToClear',
    'oneToSet',
    'oneToToggle',
    'zeroToClear',
    'zeroToSet',
    'zeroToToggle',
    'clear',
    'set',
    'modify'
  ]
};

const readAction = {
  description: 'an action that happens to a field after a read operation happens',
  enum: [
    'clear',
    'set',
    'modify'
  ]
};

const field = {
  type: 'object',
  title: 'Register field',
  required: ['name', 'bitOffset', 'bitWidth'],
  properties: {
    name,
    description,
    bitOffset: {oneOf: [expression, uint]}, // base % regWidth in bits
    resetValue: int, // ipxactish
    // resetMask // ipxactish
    bitWidth:  {oneOf: [expression, uint]}, // in bits
    volatile: { type: 'boolean' },
    access,
    enumeratedValues,
    modifiedWriteValue,
    readAction,
    testable: { type: 'boolean' }, // default true
    reserved: { type: 'boolean' } // ipxactish
  }
};

module.exports = field;
