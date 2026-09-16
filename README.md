[![NPM version](https://img.shields.io/npm/v/duh-schema.svg)](https://www.npmjs.org/package/duh-schema)
[![Actions Status](https://github.com/sifive/duh-schema/workflows/Tests/badge.svg)](https://github.com/sifive/duh-schema/actions)

DUH document JSON schema

JSON Schema (draft-07) describing hardware description documents: catalogs, components, designs, abstraction definitions, bus definitions, bus interfaces, memory maps and registers.

## Install

```sh
npm install duh-schema
```

## Usage

```js
const schema = require('duh-schema').root;
```

Validate with [`ajv`](https://ajv.js.org/):

```js
const Ajv = require('ajv');
const schema = require('duh-schema').root;

const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate(document);
```

Browser build: [`dist/schema.js`](https://unpkg.com/duh-schema/dist/schema.js) (`unpkg` / standalone `schema`).

More: [`docs/`](docs/).

## Development

```sh
npm install
npm test
```

`npm test` runs [ESLint](https://eslint.org) (flat config, [eslint 10](https://eslint.org) + [`@drom/eslint-config`](https://www.npmjs.com/package/@drom/eslint-config), rules in [`eslint.config.js`](eslint.config.js)), then [mocha](https://mochajs.org) unit tests with [c8](https://github.com/bcoe/c8) coverage (`text` + `lcov` reports to `coverage/`).

CI: [GitHub Actions](.github/workflows/nodejs.yml), Node.js 22 / 24 / 26 on Linux, Windows, macOS.
