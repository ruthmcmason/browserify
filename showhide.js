module.exports = {
    init: function() {
        $('#show').on('click, change', '[data-show]', function(e) {
            $($(this).data('show')).show();
        });
        $('#hide').on('click, change', '[data-hide]', function(e) {
            $($(this).data('hide')).hide();
        });
    }
};
