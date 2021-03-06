#!/usr/bin/env node

'use strict';

var check = require('./index');

var args = process.argv.slice(2);

if (args.length !== 1) {
  console.error('You should only pass a single argument to "node-version-satisfies"'); // eslint-disable-line no-console
  process.exit(1);
  return;
}

process.exit(check.satisfies(args[0]) ? 0 : 1);
