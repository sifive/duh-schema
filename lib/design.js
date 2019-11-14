'use strict';

const {vendor, library, name, version, id} = require('./primitive.js');

const componentRef = id;

const interfaceRef = id; // FIXME id/id

const portRef = id;

const busRef = id;

// -----------------------------------------------------------------------------
const configurableElementValue = {
  type: 'object', properties: { // TODO
    // referenceId: value
    // '.+': value
  }
};

const configurableElementValues = {
  type: 'array', items: configurableElementValue
};

const activeInterface = {
  type: 'object', properties: {
    busRef,
    componentRef
  },
  required: ['busRef', 'componentRef']
};

// no activeInterfaces layer in Spirit
const activeInterfaces = {
  type: 'array', items: activeInterface
};

const componentInstance = {
  type: 'object', properties: {
    name, // instanceName,
    activeInterfaces,
    configurableElementValues
  },
  required: ['instanceName', 'activeInterfaces']
};

const componentInstances = {type: 'array', items: componentInstance};
// -----------------------------------------------------------------------------

const interconnection = {
  type: 'object', properties: {
    name,
    activeInterfaces
  },
  required: ['name', 'activeInterfaces']
};

const interconnections = {
  type: 'array', items: interconnection
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
  type: 'object', properties: {
    name,
    portReferences
  }
};

const adHocConnections = {
  type: 'array', items: adHocConnection
};
// -----------------------------------------------------------------------------

const hierConnection = {
  type: 'object', properties: {
    interfaceRef,
    activeInterface
  },
  required: ['interfaceRef']
};

const hierConnections = {
  type: 'array', items: hierConnection
};
// -----------------------------------------------------------------------------

const design = {
  type: 'object', properties: {
    vendor, library, name, version,
    componentInstances,
    interconnections,
    adHocConnections,
    hierConnections
  },
  required: ['vendor', 'library', 'name', 'version']
};

module.exports = {
  type: 'object', properties: {
    design
  },
  required: ['design']
};
