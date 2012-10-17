"use strict";

module.exports = function() {
	return (Date.now() / 1000) >>> 0;
};

if (require.main === module) {
	console.log(module.exports());
}