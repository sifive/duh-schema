'use strict';

const {id, uint, int, access, expression, description} = require('./primitive.js');
const enumeratedValues = require('./enumeratedValues.js');

const modifiedWriteValue = {
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
  enum: [
    'clear',
    'set',
    'modify'
  ]
};

const field = {
  type: 'object',
  required: ['name', 'bitOffset', 'bitWidth'],
  properties: {
    name: id,
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
