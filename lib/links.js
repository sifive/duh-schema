'use strict';

const {name} = require('./primitive.js');

const links = {
  type: 'array',
  description: 'set of links',
  items: {
    type: 'object',
    description: 'links is an edge between source and target bus interfaces',
    properties: {
      source: {
        description: 'bus interface where links starts',
        oneOf: [
          {
            type: 'string',
            description: `
A symbolic link name that expected to be resolved to the target busInnterface
of some instance withing design
`
          },
          {
            type: 'array', items: name, minItems: 2, maxItems: 2,
            description: `
A pair of names: component instance name, busInterface name
`
          }
        ]
      },
      target: {
        description: 'bus interface where link terminates',
        oneOf: [
          {
            type: 'string',
            description: `
A symbolic link name that expected to be resolved to the initiator busInterface
of some instance withing design
`
          },
          {
            type: 'array', items: name, minItems: 2, maxItems: 2,
            description: `
A pair of names: component instance name, busInterface name
`
          }
        ]
      }
    },
    required: ['source', 'target']
  }
};

module.exports = links;
