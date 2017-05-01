#!/usr/bin/env node

var parent = require('parent-package-json');

// see if a project is already installing axe-core
// such as axe-cli, which installs axe automatically
var pathToParent = parent();
if(pathToParent !== false) {
	var JSONOfParent = parent().parse();
	if (JSONOfParent.dependencies['axe-core']) {
		return;
	}
}
try {
	/**
	 * Check if axe-core is installed
	 */
  require('axe-core');

} catch (err) {
	/**
	 * Warn user with install instructions
	 */
  console.error('You must install axe-core first, using:\n\n`npm install axe-core`\n');
}