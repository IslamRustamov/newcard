$(document).ready(function() {
  $("#btn1").click(function() {
    $("body").css("background-image", "url(gif/asap.gif)");
    $("#head").hide();
    $("#info1").fadeIn();
  });

  $("#btn2").click(function() {
    $("body").css("background-image", "url(gif/travis.gif)");
    $("#info1").hide();
    $("#head").fadeIn();
  });

  $("#btn3").click(function() {
    $("body").css("background-image", "url(gif/drake.gif)");
    $("#info1").hide();
    $("#info2").fadeIn();
  });

  $("#btn4").click(function() {
    $("body").css("background-image", "url(gif/asap.gif)");
    $("#info2").hide();
    $("#info1").fadeIn();
  });

  $("#btn5").click(function() {
    $("body").css("background-image", "url(gif/travis1.gif)");
    $("#info2").hide();
    $("#foot").fadeIn();
  });

  $("#btn6").click(function() {
    $("body").css("background-image", "url(gif/drake.gif)");
    $("#foot").hide();
    $("#info2").fadeIn();
  });
});
