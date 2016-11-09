module.exports = function () {
  $( "input" ).focus(function() {
  $( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
});
}
