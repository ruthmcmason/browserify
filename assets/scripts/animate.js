
module.exports = function () {
  $("[data-move]").on("click", function () {
    var data = $(this).data("move");
    var direction = $(this).data("direction");
    if(direction === 'left') {
      var dir = "-=";
    }
    else {
      var dir = "+=";
    }
    var length = $(this).data("length");
    $(data).each(function () {
          $(this).animate({"left": dir+length}, "slow");
    });
  });
}
