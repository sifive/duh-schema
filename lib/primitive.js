'use strict';

exports.name = {
  type: 'string',
  minLength: 1,
  maxLength: 256,
  pattern: '^[_:A-Za-z][-._:A-Za-z0-9]*$'
};

exports.expression = {
  type: 'string',
  minLength: 1,
  maxLength: 256
  // pattern: '^[a-zA-Z][:a-zA-Z0-9_]*$' // (a + 5)
};

exports.uint = {
  type: 'integer',
  minimum: 0
};

exports.int = {
  type: 'integer'
};

exports.access = {
  description: 'specifies the accessibility of the data in the address block',
  enum: [
    'read-write',
    'read-only',
    'write-only',
    'read-writeOnce',
    'writeOnce'
  ]
};

const id = {
  type: 'string',
  minLength: 1,
  maxLength: 256,
  pattern: '^[a-zA-Z][:a-zA-Z0-9_-]*$'
};

const uri = {
  type: 'string',
  minLength: 3,
  maxLength: 256,
  pattern: '^[a-zA-Z][a-zA-Z0-9_.-]*$'
};

exports.id = id;
exports.vendor = uri;
exports.library = id;
exports.version = {type: 'string'}; // FIXME semver
exports.description = {type: 'string'};
exports.displayName = {type: 'string'};
