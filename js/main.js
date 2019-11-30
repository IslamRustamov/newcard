$(document).ready(function() {
  $("#btn1").click(function() {
    $("body").css("background-image", "url(pics/asap.jpg)");
    $("#head").hide();
    $("#info1").fadeIn();
  });

  $("#btn2").click(function() {
    $("body").css("background-image", "url(pics/travis.jpg)");
    $("#info1").hide();
    $("#head").fadeIn();
  });

  $("#btn3").click(function() {
    $("body").css("background-image", "url(pics/drake.jpg)");
    $("#info1").hide();
    $("#info2").fadeIn();
  });

  $("#btn4").click(function() {
    $("body").css("background-image", "url(pics/asap.jpg)");
    $("#info2").hide();
    $("#info1").fadeIn();
  });

  $("#btn5").click(function() {
    $("body").css("background-image", "url(pics/travis1.jpg)");
    $("#info2").hide();
    $("#foot").fadeIn();
  });

  $("#btn6").click(function() {
    $("body").css("background-image", "url(pics/drake.jpg)");
    $("#foot").hide();
    $("#info2").fadeIn();
  });
});
