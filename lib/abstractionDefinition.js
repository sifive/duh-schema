'use strict';

const {vlnvs, description} = require('./primitive.js');
const assertions = require('./assertions.js');
const props = require('./props.js');

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
      // required: ['onInitiator', 'onTarget'],
      properties: {
        onMaster: onRole,
        onSlave: onRole,
        onInitiator: onRole,
        onTarget: onRole,
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
  oneOf: vlnvs,
  required: ['busType', 'ports'],
  properties: {
    busType: {
      type: 'object',
      oneOf: vlnvs
    },
    ports: {
      type: 'object',
      patternProperties: {
        '.+': port
      }
    },
    props, assertions
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
