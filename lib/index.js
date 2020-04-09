'use strict';

const pkg = require('../package.json');
const catalog = require('./catalog.js');
const component = require('./component.js');
const design = require('./design.js');
const abstractionDefinition = require('./abstractionDefinition.js');
const busDefinition = require('./busDefinition.js');
const defs = require('./defs.js');

exports.version = pkg.version;
exports.any = {
  oneOf: [
    catalog,
    component,
    design,
    abstractionDefinition,
    busDefinition
  ]
};
exports.component = component;
exports.abstractionDefinition = abstractionDefinition;
exports.defs = defs;
