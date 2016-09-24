#!/usr/bin/env node
'use strict';

const meow = require('meow');
const recent = require('recent-version');

const cli = meow(`
	Usage
	  $ recent-version <name>

	Example
	  $ recent-version rubyisms
	  0.3.2
`);

const name = cli.input[0];

if (!name) {
	console.error('Specify a package name');
	process.exit(1);
}

recent(name)
	.then(version => console.log(`${name}@${version}`))
	.catch(error => console.error(error.message));
