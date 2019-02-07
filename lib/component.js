'use strict';

const {name, version, vendor, library, id, uint, access} = require('./primitive.js');
const register = require('./register.js');

const portMap = {
  type: 'object',
  properties: {
    logicalPort: {
      type: 'object',
      required: ['name'],
      properties: {
        name
      }
    },
    physicalPort: {
      type: 'object',
      required: ['name'],
      properties: {
        name
      }
    },
    logicalTieOff: {
      type: 'integer',
      minimum: 0
    }
  },
  oneOf: [
    {
      required: ['logicalPort', 'physicalPort']
    },
    {
      required: ['logicalPort', 'logicalTieOff']
    }
  ]
};

const busInterfaces = {
  type: 'array',
  items: {
    type: 'object',
    required: ['name', 'interfaceMode', 'busType', 'abstractionTypes'],
    properties: {
      name,
      interfaceMode: { enum: ['master', 'slave'] },
      busType: {
        type: 'object',
        required: ['name'],
        properties: {
          name
        }
      },
      abstractionTypes: {
        type: 'array',
        items: {
          type: 'object',
          required: ['viewRef'],
          properties: {
            viewRef: id,
            portMaps: {
              type: 'array',
              items: portMap
            }
          }
        }
      }
    }
  }
};

const ports = {
  type: 'array',
  items: {
    type: 'object',
    required: ['name', 'wire'],
    properties: {
      name,
      wire: {
        type: 'object',
        required: ['direction', 'width'],
        properties: {
          direction: { enum: ['in', 'out'] },
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
          }
        }
      }
    }
  }
};

const component = {
  type: 'object',
  required: ['name', 'version', 'vendor', 'library', 'model', 'busInterfaces'],
  properties: {
    name, version, vendor, library,
    busInterfaces: busInterfaces,
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
