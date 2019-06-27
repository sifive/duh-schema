'use strict';

const Ajv = require('ajv');
const lib = require('../lib/');

describe('any', () => {
  const ajv = new Ajv();
  const validate = ajv
    .addSchema(lib.defs)
    .compile(lib.any);

  [{
    component: {
      name: 'foo', library: 'bar', vendor: 'baz', version: '0.1.0',
      busInterfaces: [],
      model: {ports: []}
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
