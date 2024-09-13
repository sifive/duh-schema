'use strict';

const {
  vendor, library, name, version,
  id, displayName, description
} = require('./primitive.js');

const libraryRefType = {
  type: 'object',
  required: ['vendor', 'library', 'name', 'version'],
  properties: {
    vendor, library, name, version
  }
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
