'use strict';

const {name, uint, int, access, expression, description} = require('./primitive.js');
const enumeratedValues = require('./enumeratedValues.js');

const modifiedWriteValue = {
  description: 'manipulation of data written to a field',
  enum: [
    'oneToClear',   // one shall set to zero (clear) the corresponding bit
    'oneToSet',     // one shall set to one the corresponding bit
    'oneToToggle',  // one shall toggle the corresponding bit
    'zeroToClear',  // zero shall set to zero (clear) the corresponding bit
    'zeroToSet',    // zero shall set to one the corresponding bit
    'zeroToToggle', // zero shall toggle the corresponding bit
    'clear',        // all bits in the location are set to zero (cleared)
    'set',          // all bits in the location are set to one
    'modify'        // all bits in the location may be modified in an undefined way
  ] // if 'modifiedWriteValue' not specified, the location is not modified after a write operation.
};

const readAction = {
  description: 'an action that happens to a field after a read operation happens',
  enum: [
    'clear',  // the location is cleared after a read operation.
    'set',    // the location is set after a read
    'modify'  // the location is modified in some way after a read operation.
  ] // if 'readAction' not specified, the location is not modified after a read operation.
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
