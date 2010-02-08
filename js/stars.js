jQuery(function() {
    $(window).click(function(e) {
        var x = e.clientX;
        var y = e.clientY;
        var $star = jQuery('body').append('<span class="star">♥</span>');
        $star.css('color', 'red');
        $star.css({
            position: "absolute",
            marginLeft: 0, marginTop: 0,
            top: y, left: x
        });
    });
});
