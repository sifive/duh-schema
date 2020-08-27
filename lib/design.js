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
  type: 'array',
  description: 'pair of (instance name, bus interface name)',
  minItems: 2, maxItems: 2,
  items: name
};

// -----------------------------------------------------------------------------

const connection = {
  oneOf: [{
    type: 'object',
    description: 'exposes a named connection point on the boundary of containing component',
    properties: {
      name,
      import: name, // name of connection point on the boundary of containing component
      target: instanceBus
    },
    required: ['import', 'target']
  }, {
    type: 'object',
    description: 'connection between initiator interface and target interface',
    properties: {
      name,
      source: instanceBus,
      target: instanceBus
    },
    required: ['source', 'target']
  }, {
    type: 'object',
    description: 'exposes a named connection point on the boundary of containing component',
    properties: {
      name,
      source: instanceBus,
      export: name // name of connection point on the boundary of containing component
    },
    required: ['source', 'export']
  }]
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
  title: 'Design document',
  properties: {
    design
  },
  required: ['design']
};
