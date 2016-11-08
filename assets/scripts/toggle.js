var $ = require('jquery');


exports.toggle = function () {
  $("[data-toggle]").on("click", function () {
    var data2toggle = $(this).data("toggle");
    var speed = $(this).attr("toggle-speed");
    $(data2toggle).each(function () {
          $(this).toggle(speed);

    });
  });

  $("[data-slide]").on("click", function () {
    var data22toggle = $(this).data("slide");
    var sspeed = $(this).data("speed");
  
    $(data22toggle).each(function () {
          $(this).slideToggle(sspeed);

    });
    console.log(sspeed);
  });
}
