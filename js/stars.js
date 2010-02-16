jQuery(function() {
    $(window).click(function(e) {
        var x = e.clientX;
        var y = e.clientY;
        // var $star = jQuery('body').append('<span class="star">♥</span>');
        var $star = jQuery('<span class="star">♥</span>');
        jQuery('body').append($star);

        $star.css('color', 'red');
        $star.css({
            position: "absolute",
            marginLeft: 0, marginTop: 0,
            top: y, left: x
        });

        $star
            .bind('mousedown', function() {
                jQuery(this).css('color', 'green');
                return false;
            })
            .bind('mouseup', function() {
                jQuery(this).css('color', 'blue');
                return false;
            })
            .bind('click', function() {
                return false;
            });

        return false;
    });
});
