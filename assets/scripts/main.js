$ = window.jQuery = require("jquery");
require('jquery-ui');

var toggle = require("./toggle.js");
var animate = require("./animate.js");
var forms = require("./forms.js");

//toggle + slideToggle object
toggle();

//animate object left + right
animate();

//focus on form input
forms();
