'use strict';

const {
  name, version, vendor, library,
  uint, description, displayName
} = require('./primitive.js');
// const register = require('./register.js');


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
      analog: { enum: ['in', 'out', 'inout'] },
      displayName,
      description
    }
  }]
};

// Each port element describes a single external port on the component.
const ports = {
  title: 'Ports',
  oneOf: [{
    // Main port format:  "pin_name": width +- direction
    type: 'object',
    patternProperties: {
      '.+': wire
    }
  }, {
    // Elaborate port format
    type: 'array',
    uniqueItemProperties: ['name'],
    items: {
      type: 'object',
      required: ['name', 'wire'],
      properties: {
        name, // unique name within the containing ports element
        wire
      }
    }
  }]
};

const component = {
  type: 'object',
  required: ['vendor', 'library', 'name', 'version'],
  properties: {
    vendor, library, name, version,
    busInterfaces: {
      type: 'array',
      uniqueItemProperties: ['name'],
      items: {$ref: 'defs#/busInterface'}
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
      uniqueItemProperties: ['name'],
      items: {
        type: 'object',
        title: 'Address space',
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
      uniqueItemProperties: ['name'],
      items: {$ref: 'defs#/memoryMap'}
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
  title: 'Component document',
  description: `
Component document collects information about a single hardware block without
expressing internal structure or hierarchy. Component document expressing following aspects:
* name, version
* top level ports
* parameter schema
* bus interfaces
* memory regions
* registers
* clocks, resets
* block generation flow
* references to implementation, documentation, tests
`,
  required: ['component'],
  properties: {
    component: component
  }
};
