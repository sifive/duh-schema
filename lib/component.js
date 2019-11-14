'use strict';

const {name, version, vendor, library, uint, access} = require('./primitive.js');
const register = require('./register.js');
const busInterface = require('./busInterface');

const wire = {
  oneOf: [{
    type: 'integer'
  }, {
    type: 'string'
  }, {
    type: 'object',
    required: ['direction', 'width'],
    properties: {
      direction: { enum: ['in', 'out', 'inout'] },
      width: {
        oneOf: [
          {
            type: 'integer',
            minimum: 1
            // maximum: 65536 // FIXME unbound wire width
          },
          {
            type: 'string'
          }
        ]
      },
      analog: { enum: ['in', 'out', 'inout'] }
    }
  }]
};

const ports = {
  oneOf: [{
    // Main port format:  "pin_name": width +- direction
    type: 'object',
    patternProperties: {
      '.+': wire
    }
  }, {
    // Elaborate port format
    type: 'array',
    items: {
      type: 'object',
      required: ['name', 'wire'],
      properties: {
        name,
        wire: wire
      }
    }
  }]
};

const component = {
  type: 'object',
  required: ['name', 'version', 'vendor', 'library'],
  properties: {
    name, version, vendor, library,
    busInterfaces: {
      type: 'array',
      items: busInterface
    },
    model: {
      type: 'object',
      required: ['ports'],
      properties: {
        ports: ports
      }
    },
    addressSpaces: {
      type: 'array',
      items: {
        type: 'object',
        required: ['name', 'range', 'width'],
        properties: {
          name,
          range: uint,
          width: uint
        }
      }
    },
    memoryMaps: {
      type: 'array',
      items: {
        type: 'object',
        required: ['name', 'addressBlocks'],
        properties: {
          name,
          addressUnitBits: {
            enum: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
            default: 8
          },
          addressBlocks: {
            type: 'array',
            items: {
              type: 'object',
              required: ['name', 'baseAddress', 'range', 'width'],
              properties: {
                name,
                baseAddress: uint,
                range: uint,
                width: uint,
                usage: { enum: ['memory', 'register'] },
                volatile: { type: 'boolean' },
                access: access,
                registers: {
                  type: 'array',
                  items: register
                }
              }
            }
          }
        }
      }
    },
    componentGenerators: { type: 'array' },
    fileSets: {
      type: 'object'
    },
    parameters: {
      type: 'array'
    }
  }
};

module.exports = {
  type: 'object',
  required: ['component'],
  properties: {
    component: component
  }
};
