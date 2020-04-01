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
    },
    props
  }
};

module.exports = {
  type: 'object',
  required: ['abstractionDefinition'],
  properties: {
    abstractionDefinition: abstractionDefinition
  }
};
