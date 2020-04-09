'use strict';

const {name, version, vendor, library, description} = require('./primitive.js');
const meta = require('ajv/lib/refs/json-schema-draft-06.json');

const props = {
  type: 'object',
  patternProperties: {
    '.+': meta
  }
};

const onRole = {
  type: 'object',
  properties: {
    direction: {
      enum: ['in', 'out']
    },
    width: {
      oneOf: [{
        type: 'integer'
      }, {
        type: 'string'
      }]
    }
  },
  oneOf: [{
    required: ['direction'],
    properties: {
      presence: {
        enum: ['optional', 'required']
      }
    }
  }, {
    required: ['presence'],
    properties: {
      presence: {
        enum: ['illegal']
      }
    }
  }]
};

const port = {
  type: 'object',
  required: ['description', 'wire'],
  properties: {
    description,
    wire: {
      type: 'object',
      required: ['onMaster', 'onSlave'],
      properties: {
        onMaster: onRole,
        onSlave: onRole,
        isAddress: {
          description: 'the port contains address information',
          type: 'boolean',
          default: false
        },
        isData: {
          description: 'the port contains data information',
          type: 'boolean',
          default: false
        },
        isClock: {
          description: 'port is a clock for this bus interface',
          type: 'boolean',
          default: false
        },
        isReset: {
          description: 'port is a reset for this bus interface',
          type: 'boolean',
          default: false
        },
        requiresDriver: {
          description: 'specifies whether the port requires a driver when used in a completed design',
          type: 'boolean',
          default: false
        },
        defaultValue: {
          description: 'default logic value for this wire port',
          type: 'integer',
          minimum: 0,
          default: 0
        }
      }
    }
  }
};

const abstractionDefinition = {
  type: 'object',
  required: ['name', 'version', 'vendor', 'library', 'busType', 'ports'],
  properties: {
    name, version, vendor, library,
    busType: {
      type: 'object',
      required: ['name', 'version', 'vendor', 'library'],
      properties: {name, version, vendor, library}
    },
    ports: {
      type: 'object',
      patternProperties: {
        '.+': port
      }
    },
    props
  }
};

module.exports = {
  type: 'object',
  title: 'Abstraction definition document',
  required: ['abstractionDefinition'],
  properties: {
    abstractionDefinition: abstractionDefinition
  }
};
