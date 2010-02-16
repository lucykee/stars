$(function() {
    $(window).click(function(e) {
        var x = e.clientX;
        var y = e.clientY;
        // var $star = $('body').append('<span class="star">♥</span>');
        var $star = $('<span class="star">♥</span>');
        $('body').append($star);

        $star.css('color', 'red');
        $star.css({
            position: "absolute",
            marginLeft: 0, marginTop: 0,
            top: y, left: x
        });

        $star
            .bind('mouseup', function() {
		var size = 100;
	        var $star = $(this);
		setInterval(
		    function() {
			size = size + 5;
                        $star.css('font-size', String(size) + '%');
		    }, 100
		);
                return false;
            })
            .bind('click', function() {
                return false;
            });

        return false;
    });
});
