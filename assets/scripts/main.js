$ = window.jQuery = require("jquery");
require('jquery-ui');

var toggle = require("./toggle.js");
var animate = require("./animate.js");
var forms = require("./forms.js");

//quick console.log
window.log = function (){
  log.history = log.history || []; //store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};

//toggle + slideToggle object
toggle();

//animate object left + right
animate();

//focus on form input
forms();
