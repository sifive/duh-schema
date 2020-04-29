'use strict';

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
          items: {$ref: 'defs#/design'}
        },
        busDefinitions: {
          type: 'array',
          items: {$ref: 'defs#/abstractionDefinition'}
        }
      }
    }
  },
  required: ['catalog']
};
