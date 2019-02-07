'use strict';

const id = {
  type: 'string',
  minLength: 3,
  maxLength: 256,
  pattern: '^[a-zA-Z][a-zA-Z0-9_]*$'
};

const uint = {
  type: 'integer',
  minimum: 0
};

const access = {
  enum: [
    'read-write',
    'read-only',
    'write-only',
    'read-writeOnce',
    'writeOnce'
  ]
};

const vendor = id;
const library = id;
const name = id;
const version = { type: 'string' }; // FIXME semver

module.exports = {id, uint, vendor, library, name, version, access};
