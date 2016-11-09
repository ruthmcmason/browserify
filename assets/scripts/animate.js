module.exports = function () {

  $("[data-move]").on("click", function () {
    var data = $(this).data("move");
    var direction = $(this).data("direction");
    var length = $(this).data("length");
    if(direction == "left" || "right") {
      var dir = "left";
    }
    else {
      var dir = "top";
    }
    var animation = {};
    animation[dir] = length;
    $(this).animate( animation, "slow");
    console.log(animation);
  });
}
