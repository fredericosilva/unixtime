"use strict";

var tries = {
	'just the division' : function() {
		return (Date.now() / 1000);
	},
	'unsigned right shift' : function() {
		return (Date.now() / 1000) >>> 0;
	},
	'tilde tilde' :function() {
		return ~~(Date.now() / 1000);
	},
	'ceil' : function() {
		return Math.ceil(Date.now() / 1000);
	},
	'floor' : function() {
		return Math.floor(Date.now() / 1000);
	},
	'parseInt' : function() {
		return parseInt(Date.now() / 1000, 10);
	}
};

//warm up
for(var key in tries) {
	var func = tries[key];

	console.assert(Math.abs(parseInt(func(), 10) - parseInt(Date.now() / 1000, 10)) <= 1, key);
	for(var i = 0; i < 1000; i++) {
		func();
	}
}

for(var key in tries) {
	var func = tries[key];
	console.time(key);
	for(var i = 0; i < 1000000; i++) {
		func();
	}
	console.timeEnd(key);
}