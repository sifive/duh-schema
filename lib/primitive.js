'use strict';


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

exports.bigInt = {
  oneOf: [{
    type: 'integer'
  }, {
    type: 'string',
    pattern: '^(([0-9]+)|(0[xX][0-9a-fA-F]+)|(0[bB][01]+))$'
  }]
};

exports.access = {
  description: 'specifies the accessibility of the data in the address block',
  enum: [
    'read-write',
    // Both read and write transactions have an effect on this field.
    // Write transactions may affect the contents of the field.
    // Read transaction returns it's content.
    'read-only',
    // A read transaction to this location returns it's contents.
    // A write transaction to this field has no effect.
    'write-only',
    // A write transaction to this location sets new value.
    // A read transaction returns undefined value.
    'read-writeOnce',
    // Both read and write transactions have an effect on this field.
    // Only the first write transaction, after power up, may affect the contents.
    // Every read transaction return it's value.
    'writeOnce'
    // Only the first write transaction, after power up, to this location affects the contents.
    // A read transaction returns undefined results.
  ]
};

const name = {
  type: 'string',
  minLength: 1,
  maxLength: 256,
  pattern: '^[_:A-Za-z][-._:A-Za-z0-9]*$'
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

const vlnv = {
  type: 'string',
  minLength: 9,
  maxLength: 256,
  pattern: '^[a-zA-Z][a-zA-Z0-9_.-]*/[a-zA-Z][:a-zA-Z0-9_-]*/[a-zA-Z][:a-zA-Z0-9_-]*/[a-zA-Z0-9_.-]+$'
};

const version = {type: 'string'}; // FIXME semver

const vlnvs = [
  {
    properties: {
      vlnv
    },
    required: ['vlnv']
  },
  {
    properties: {
      vendor: uri,
      library: id,
      name,
      version
    },
    required: ['vendor', 'library', 'name', 'version']
  }
];

exports.name = name;
exports.id = id;
exports.vendor = uri;
exports.library = id;
exports.vlnvs = vlnvs;
exports.version = version;

exports.description = {type: 'string'};
exports.displayName = {type: 'string'};
