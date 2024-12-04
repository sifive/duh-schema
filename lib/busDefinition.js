'use strict';

const {description, vlnvs} = require('./primitive.js');
const assertions = require('./assertions.js');
const props = require('./props.js');

const busDefinition = {
  type: 'object',
  oneOf: vlnvs,
  properties: {
    description,
    props,
    assertions
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
