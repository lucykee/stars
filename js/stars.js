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

        var size = 100;
        var factor = 1;
        var func = Math.ceil;
        var interval = setInterval(
            function() {
                size = func(size * factor);
                $star.css('font-size', String(size) + '%');
                if (size == 0) {
                    clearInterval(interval);
                    $star.remove(); 
                }
            }, 200
        );
        $star
            .bind('mouseup', function() {
                if (factor <= 1) {
                    factor = 1.10;
                    func = Math.ceil;
                }
                else {
                    factor = 0.90;
                    func = Math.floor;
                }
                return false;
            })
            .bind('click', function() {
                return false;
            });

        return false;
    });
});
