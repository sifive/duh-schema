'use strict';

const {vlnvs, name, id, displayName, description} = require('./primitive.js');

const libraryRefType = {
  type: 'object',
  oneOf: vlnvs
};

module.exports = {
  type: 'object',
  title: 'Bus interface',
  required: ['name', 'busType'],
  properties: {
    name, displayName, description, // nameGroup
    interfaceMode: {
      enum: [
        'master', 'slave', // TODO remove legacy mode
        'initiator', 'target',
        'monitor', null
      ]
    },
    memoryMapRef: {type: 'string'},
    busType: {
      oneOf: [
        libraryRefType,
        {type: 'string'} // non standard bus interfaces
      ]
    },
    abstractionTypes: {
      type: 'array',
      items: {
        type: 'object',
        // required: ['viewRef'],
        properties: {
          viewRef: id,
          portMaps: {
            oneOf: [{
              type: 'object',
              patternProperties: {
                '.+': {'$ref': '#/$defs/bundle'}
              }
            }, {
              type: 'array',
              items: {
                type: 'string'
              }
            }]
          }
        }
      }
    }
  }
};
