var $ = require('jquery');

exports.toggle = function () {
  $("[data-toggle]").on("click", function () {
    var data2toggle = $(this).data("toggle");
    $(data2toggle).toggle();
  });
  }
