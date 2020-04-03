'use strict';

const component = require('./component.js');
const design = require('./design.js');
const catalog = require('./catalog.js');
const abstractionDefinition = require('./abstractionDefinition.js');
const busDefinition = require('./busDefinition.js');

const register = require('./register.js');
const busInterface = require('./busInterface.js');
const memoryMap = require('./memoryMap.js');

// const {name} = require('./primitive.js');

// const portMap = {
//   type: 'object',
//   properties: {
//     logicalPort: {
//       type: 'object',
//       required: ['name'],
//       properties: {
//         name
//       }
//     },
//     physicalPort: {
//       type: 'object',
//       required: ['name'],
//       properties: {
//         name
//       }
//     },
//     logicalTieOff: {
//       type: 'integer',
//       minimum: 0
//     }
//   },
//   oneOf: [
//     {
//       required: ['logicalPort', 'physicalPort']
//     },
//     {
//       required: ['logicalPort', 'logicalTieOff']
//     }
//   ]
// };

const bundle = {
  oneOf: [{
    type: 'string'
  }, {
    type: 'array',
    items: {
      type: 'string'
    }
  }, {
    type: 'object',
    patternProperties: {
      '.+': {'$ref': 'defs#/bundle'}
    }
  }]
};

module.exports = {
  '$id': 'defs',
  catalog,
  component,
  design,
  abstractionDefinition,
  busDefinition,

  busInterface,
  memoryMap,
  register,
  bundle
};
