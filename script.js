$(document).ready(function() {
    function animateCircle() {
        $('#inner-circle').animate({
            width: "200px",
            height: "200px"
        }, 4000, function() {
            // Hold the expansion for 4 seconds
            setTimeout(function() {
                $('#inner-circle').animate({
                    width: "0",
                    height: "0"
                }, 4000);
            }, 4000);
        });
    }

    // Initial call to start the animation
    animateCircle();

    // Repeat the animation every 16 seconds (4s to expand, 4s hold, 4s to contract, 4s hold)
    setInterval(animateCircle, 16000);
});
