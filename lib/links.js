'use strict';

const {name} = require('./primitive.js');

const links = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      source: {
        oneOf: [
          {type: 'string'}, // symbolic link
          {type: 'array', items: name, minItems: 2, maxItems: 2} // instance, busInterface
        ]
      },
      target: {
        oneOf: [
          {type: 'string'}, // symbolic link
          {type: 'array', items: name, minItems: 2, maxItems: 2} // instance, busInterface
        ]
      },
      attr: {type: 'object'}
    },
    required: ['source', 'target', 'attr']
  }
};

module.exports = links;
