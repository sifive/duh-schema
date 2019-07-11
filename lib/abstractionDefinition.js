'use strict';

const {name, version, vendor, library} = require('./primitive.js');

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
    description: {type: 'string'},
    wire: {
      type: 'object',
      required: ['onMaster', 'onSlave'],
      properties: {
        onMaster: onRole,
        onSlave: onRole
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
    }
  }
};

module.exports = {
  type: 'object',
  required: ['abstractionDefinition'],
  properties: {
    abstractionDefinition: abstractionDefinition
  }
};
