$(document).ready(function() {
  console.log("ready!");

  $('#resetbutton').click(function() {

    $('#breathins').val('5');
    $('#breathint').val('5');

    $('#breathholdins').val('5');
    $('#breathholdint').val('5');

    $('#breathouts').val('5');
    $('#breathoutt').val('5');

    $('#breathoutholds').val('5');
    $('#breathoutholdt').val('5');

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
  //  timeout = setTimeout(function(){
  //
  //    , 500);
  // $('.circle').on('click', function(){
  //   $('.circle').addClass('shrink');
  //     });

});
