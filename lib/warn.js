#!/usr/bin/env node

var parent = require('parent-package-json');

try {
	/**
	 * Check if axe-core is installed
	 */

	// see if a project is already installing axe-core
	// such as axe-cli, which installs axe automatically
	var pathToParent = parent();
	if(pathToParent !== false) {
		var JSONOfParent = parent().parse();
		if (JSONOfParent.dependencies['axe-core']) {
			// return;
		}
	}
  require('axe-core');

} catch (err) {
	console.log(err);
	/**
	 * Warn user with install instructions
	 */
  console.error('You must install axe-core first, using:\n\n`npm install axe-core`\n');
}