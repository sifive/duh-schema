'use strict';

let meta;

const simpleTypes = {
  enum: [
    'array',
    'boolean',
    'integer',
    'null',
    'number',
    'object',
    'string'
  ]
};

const schemaArray = {
  type: 'array',
  minItems: 1,
  items: meta
};

meta = {
  type: 'object',
  properties: {
    type: simpleTypes,
    description: {type: 'string'},
    properties: {
      type: 'object',
      additionalProperties: meta
    },
    allOf: schemaArray,
    anyOf: schemaArray,
    oneOf: schemaArray
  }
};

module.exports = meta;
