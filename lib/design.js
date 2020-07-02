'use strict';

const {vendor, library, name, version, id} = require('./primitive.js');

const componentRef = {type: 'object'};

const portRef = id;

// -----------------------------------------------------------------------------

const instance = {
  type: 'object', properties: {
    name,
    ref: {type: 'object'}
  },
  required: ['name', 'ref']
};

const instances = {
  type: 'array',
  uniqueItemProperties: ['name'],
  items: instance
};

// -----------------------------------------------------------------------------

const instanceBus = {
  type: 'array', items: {type: 'string'},
  minItems: 2, maxItems: 2
};

// -----------------------------------------------------------------------------

const connection = {
  type: 'object', properties: {
    name,
    source: instanceBus,
    target: instanceBus,
    import: name,
    export: name
  }
  // required: ['name']
};

const connections = {
  type: 'array', items: connection
};
// -----------------------------------------------------------------------------

const portReference = {
  type: 'object',
  oneOf: [{
    properties: {
      kind: {enum: ['internal']},
      componentRef,
      portRef
    },
    required: ['portRef', 'componentRef']
  }, {
    properties: {
      kind: {enum: ['extrenal']},
      portRef
    },
    required: ['portRef']
  }]
};

const portReferences = {type: 'array', items: portReference};

const adHocConnection = {
  type: 'object',
  properties: {
    name,
    portReferences
  }
};

const adHocConnections = {
  type: 'array',
  items: adHocConnection
};
// -----------------------------------------------------------------------------

const design = {
  type: 'object',
  properties: {
    vendor, library, name, version,
    instances,
    connections,
    adHocConnections
  },
  required: ['vendor', 'library', 'name', 'version']
};

module.exports = {
  type: 'object',
  title: 'Desgin document',
  properties: {
    design
  },
  required: ['design']
};
