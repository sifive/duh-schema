'use strict';

let component = require('./component.js');
let design = require('./design.js');

module.exports = {
  type: 'object', properties: {
    catalog: {
      type: 'object', properties: {
        components: {
          type: 'array', items: component
        },
        designs: {
          type: 'array', items: design
        }
      }
    }
  },
  required: ['catalog']
};