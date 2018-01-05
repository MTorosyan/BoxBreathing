$(document).ready(function() {
  console.log("ready to go!");

  $('#hideui').click(function() {
     $('.options').toggle("fade");
  });


  $('#square').click(function() {

    $('#breathins').val('5');
    $('#breathint').val('5');

    $('#breathholdins').val('5');
    $('#breathholdint').val('5');

    $('#breathouts').val('5');
    $('#breathoutt').val('5');

    $('#breathoutholds').val('5');
    $('#breathoutholdt').val('5');

  });

  $('#deep').click(function() {

    $('#breathins').val('6');
    $('#breathint').val('6');

    $('#breathholdins').val('5');
    $('#breathholdint').val('5');

    $('#breathouts').val('8');
    $('#breathoutt').val('8');

    $('#breathoutholds').val('5');
    $('#breathoutholdt').val('5');

  });

  $('#adeep').click(function() {

    $('#breathins').val('10');
    $('#breathint').val('10');

    $('#breathholdins').val('10');
    $('#breathholdint').val('10');

    $('#breathouts').val('15');
    $('#breathoutt').val('15');

    $('#breathoutholds').val('4');
    $('#breathoutholdt').val('4');

  });

  //breath in settings
  $('#breathins').on('change', function() {
    $('#breathint').val($('#breathins').val());
  });

  $('#breathint').on('keyup', function() {
    $('#breathins').val($('#breathint').val());
  });

  //breath in hold settings
  $('#breathholdins').on('change', function() {
    $('#breathholdint').val($('#breathholdins').val());
  });

  $('#breathholdint').on('keyup', function() {
    $('#breathholdins').val($('#breathholdint').val());
  });

  //breath out settings
  $('#breathouts').on('change', function() {
    $('#breathoutt').val($('#breathouts').val());
  });

  $('#breathoutt').on('keyup', function() {
    $('#breathouts').val($('#breathoutt').val());
  });

  //breath out hold settings
  $('#breathoutholds').on('change', function() {
    $('#breathoutholdt').val($('#breathoutholds').val());
  });

  $('#breathoutholdt').on('keyup', function() {
    $('#breathoutholds').val($('#breathoutholdt').val());
  });

  //animation control
  // This changes everything
  "use strict";

  // retrieve the element
  var element = document.getElementById("movingcircle");

  //start animation with click.
  element.addEventListener("click", function(e){
    $('.content').text("Breathe out");

              runanimation(e)
    //event listener
    }, false);

    function runanimation(e){

      e.preventDefault;
      element.classList.remove("run-animation");
      void element.offsetWidth;

      var brthout = $('#breathouts').val();
      $('.circle').css("animation-direction", "normal");
      $('.circle').css("animation-duration", brthout.toString() + "s");

      element.classList.add("run-animation");
      //detect end of animation
        $('.circle').one('animationend', function(e) {
        // pause animation
              $('.content').text("Hold");
              $('.circle').css("animation-play-state", "paused");
              var brthouth = $('#breathoutholds').val() * 1000;
                setTimeout(function() {
                        $('.content').text("Breathe in");
                        $('.circle').css("animation-play-state", "running");
                }, brthouth);

                      e.preventDefault;
                      element.classList.remove("run-animation");
                      void element.offsetWidth;

                      var brthin = $('#breathins').val();
                      $('.circle').css("animation-direction", "reverse");
                      $('.circle').css("animation-duration", brthin.toString() + "s");

                      element.classList.add("run-animation");
                      //detect end of animation
                        $('.circle').one('animationend', function(e) {
                            // pause animation
                            $('.content').text("Hold");
                            $('.circle').css("animation-play-state", "paused");
                            var brthinh = $('#breathholdins').val() * 1000;
                              setTimeout(function() {
                                $('.content').text("Breathe out");
                              $('.circle').css("animation-play-state", "running");
                            }, brthinh);
              runanimation(e)
              });
        });
    }
//docready
});
