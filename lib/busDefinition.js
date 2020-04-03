'use strict';

const {name, version, vendor, library, description} = require('./primitive.js');

const busDefinition = {
  type: 'object',
  required: ['name', 'version', 'vendor', 'library'],
  properties: {
    name, version, vendor, library, description
  }
};

module.exports = {
  type: 'object',
  title: 'Bus definition document',
  required: ['busDefinition'],
  properties: {
    busDefinition: busDefinition
  }
};
