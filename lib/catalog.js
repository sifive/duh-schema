'use strict';

let design = require('./design.js');

module.exports = {
  type: 'object',
  title: 'Catalog document',
  properties: {
    catalog: {
      type: 'object',
      properties: {
        components: {
          type: 'array',
          items: {$ref: 'defs#/component'}
        },
        designs: {
          type: 'array',
          items: design
        }
      }
    }
  },
  required: ['catalog']
};
