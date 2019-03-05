'use strict';

const component = require('./component');
const abstractionDefinition = require('./abstractionDefinition');
const busDefinition = require('./busDefinition');

exports.any = {
  anyOf: [
    component,
    abstractionDefinition,
    busDefinition
  ]
};
exports.component = component;
exports.abstractionDefinition = abstractionDefinition;
