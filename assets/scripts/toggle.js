var $ = require('jquery');


exports.toggle = function () {
  $("[data-toggle]").on("click", function () {
    var data2toggle = $(this).data("toggle");
    var speed = $(this).attr("toggle-speed");
    $(data2toggle).toggle(speed);
  });
}
