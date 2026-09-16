#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const schema = require('../lib/');

const text = JSON.stringify(schema.root, null, 2);
fs.mkdirSync(path.join(__dirname, '..', 'dist'), {recursive: true});
fs.writeFileSync(path.join(__dirname, '..', 'dist', 'schema.json'), text, 'utf8');
