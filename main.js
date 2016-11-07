//var multiply = require('./multiply');

require('./foo.js');
var bar = require('./bar.js');
var buz = require('./buz.js');
var Doo = require('./doo.js');


//global defined
foo();

//export anonymous function
bar();

//export a named function
var fiz = require('./fiz.js').fiz;
fiz();

//export anonymous object
buz.log();

//export a named object
var baz = require('./baz.js').Baz;
baz.log();

//export anonymous pattern
var doo = new Doo();
doo.log();

//export a named pattern
var Qux = require('./qux.js').Qux;
var qux = new Qux();
qux.log();

//toggle function
var toggle = require('./toggle.js').toggle;
toggle();
