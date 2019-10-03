'use strict';

const id = {
  type: 'string',
  minLength: 1,
  maxLength: 256,
  pattern: '^[a-zA-Z][:a-zA-Z0-9_-]*$'
};

const expression = {
  type: 'string',
  minLength: 1,
  maxLength: 256
  // pattern: '^[a-zA-Z][:a-zA-Z0-9_]*$' // (a + 5)
};

exports.id = id;

const uri = {
  type: 'string',
  minLength: 3,
  maxLength: 256,
  pattern: '^[a-zA-Z][a-zA-Z0-9_.]*$'
};

exports.uint = {
  type: 'integer',
  minimum: 0
};

exports.int = {
  type: 'integer'
};

exports.access = {
  enum: [
    'read-write',
    'read-only',
    'write-only',
    'read-writeOnce',
    'writeOnce'
  ]
};

exports.vendor = uri;
exports.library = id;
exports.name = id;
exports.version = {type: 'string'}; // FIXME semver
exports.description = {type: 'string'};
exports.displayName = {type: 'string'};
exports.expression = expression;
