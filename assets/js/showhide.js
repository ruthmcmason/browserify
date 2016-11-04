module.exports = {
    init: function() {
        $('button').on('click, change', '[data-show]', function(e) {
            $($(this).data('show')).show();
        });
        $('button').on('click, change', '[data-hide]', function(e) {
            $($(this).data('hide')).hide();
        });
    }
};
