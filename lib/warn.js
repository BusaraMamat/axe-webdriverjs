#!/usr/bin/env node

try {
	// see if a project is already installing axe-core
	// such as axe-cli, which installs axe automatically
	var parent = require('parent-package-json');
	var pathToParent = parent();
	if(pathToParent !== false) {
		var JSONOfParent = parent().parse();
		if (JSONOfParent.dependencies['axe-core']) {
			// return;
		}
	}
	/**
	 * Check if axe-core is installed
	 */
  require('axe-core');

} catch (err) {
	console.log(err);
	/**
	 * Warn user with install instructions
	 */
  console.error('You must install axe-core first, using:\n\n`npm install axe-core`\n');
}