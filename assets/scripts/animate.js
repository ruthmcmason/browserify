module.exports = function () {
  $("[data-move]").on("click", function () {
    var element = $(this).data("move");
    var dir = $(this).data("direction");
    var dist = $(this).data("distance");
    if((dir === "left") || (dir === "right")) {
      var direction = "left";
    }
    else if (dir === "up") {
      var direction = "top";
    }
    else if (dir === "down") {
      var direction ="bottom";
    }
    var animation = {};
    animation[direction] = dist;
    $(element).animate(animation, "slow");
    log(animation);
  });
}
