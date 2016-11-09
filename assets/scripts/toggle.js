
module.exports = function () {
  $("[data-toggle]").on("click", function () {
    var data2toggle = $(this).data("toggle");
    var speed = $(this).data("speed");
    $(data2toggle).each(function () {
          $(this).toggle(speed);
    });
  });

  $("[data-slide]").on("click", function () {
    var data2toggle = $(this).data("slide");
    var speed = $(this).data("speed");
    $(data2toggle).each(function () {
          $(this).slideToggle(speed);
    });
  });
}
