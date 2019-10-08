'use strict';

const component = require('./component');
const design = require('./design');
const abstractionDefinition = require('./abstractionDefinition');
const busDefinition = require('./busDefinition');
const defs = require('./defs');

exports.any = {
  anyOf: [
    component,
    design,
    abstractionDefinition,
    busDefinition
  ]
};
exports.component = component;
exports.abstractionDefinition = abstractionDefinition;
exports.defs = defs;
