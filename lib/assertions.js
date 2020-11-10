'use strict';

const unsignedBitExpression = {
  oneOf: [
    {
      type: 'string'
    },
    {
      type: 'object'
    }
  ]
};

const assertions = {
  type: 'array',
  items: unsignedBitExpression
};

module.exports = assertions;

/*

width
bitOffset

unsignedIntExpression

*/
