'use strict';

var component = require('./component');
var abstractionDefinition = require('./abstractionDefinition');

exports.any = {
  anyOf: [
    component,
    abstractionDefinition
  ]
};
exports.component = component;
exports.abstractionDefinition = abstractionDefinition;
