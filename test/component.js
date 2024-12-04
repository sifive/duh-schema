'use strict';

const Ajv = require('ajv');
const meta = require('ajv/dist/refs/json-schema-draft-07.json');
const ajvKeywords = require('ajv-keywords');
const lib = require('../lib/');

describe('meta', () => {
  it('any', async () => {
    const ajv = new Ajv({schemaId: 'auto'});
    const validate = ajv.addMetaSchema(meta).compile({});
    validate(lib.root);
  });
});

describe('some', () => {
  const ajv = new Ajv();
  ajvKeywords(ajv, ['uniqueItemProperties']);
  const validate = ajv.compile(lib.root);

  [{
    component: {
      name: 'foo', library: 'bar', vendor: 'baz', version: '0.1.0',
      busInterfaces: [],
      model: {ports: {}}
    }
  }, {
    abstractionDefinition: {
      name: 'foo', library: 'bar', vendor: 'baz', version: '0.1.0',
      busType: {
        name: 'foo', library: 'bar', vendor: 'baz', version: '0.1.0'
      },
      ports: {
        CMD: {
          description: 'command',
          wire: {
            onMaster: {direction: 'out'},
            onSlave: {direction: 'in'}
          }
        }
      }
    }
  }]
    .map((duh, idx) => {
      it((duh.name || 's' + idx), done => {
        if (validate(duh)) {
          done();
        } else {
          console.log(validate.errors);
          throw new Error();
        }
      });
    });

});

/* eslint-env mocha */
