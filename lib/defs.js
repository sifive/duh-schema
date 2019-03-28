'use strict';

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

module.exports = {
  '$id': 'defs',
  definitions: {
    bundle: {
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
    }
  }
};
