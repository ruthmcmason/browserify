var $ = require('jquery');

exports.toggle = function () {
  $('.toggle').click(function () {
    $("#data2toggle").toggle("slow", function () {
      
    });
  });
  }
