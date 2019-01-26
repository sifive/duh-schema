'use strict';

exports.id = {
  type: 'string',
  minLength: 3,
  maxLength: 256,
  pattern: '^[a-zA-Z][a-zA-Z0-9_]*$'
};

exports.uint = {
  type: 'integer',
  minimum: 0
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
