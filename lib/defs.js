'use strict';

const component = require('./component.js');
const register = require('./register.js');

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
      '.+': {'$ref': 'defs#/definitions/bundle'}
    }
  }]
};

module.exports = {
  '$id': 'defs',
  component,
  register,
  definitions: {
    bundle
  }
};
