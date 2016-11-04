module.exports = {
    init: function() {
        $('body').on('click, change', '[data-show]', function(e) {
            $($(this).data('show')).show();
        });
        $('body').on('click, change', '[data-hide]', function(e) {
            $($(this).data('hide')).hide();
        });
    }
};
