/// <reference types="../@types/jquery" />

$(".openNav").click(function(e){
    $(".Homecontent").animate({marginLeft:"250px"},50);
    $("#sideBar").animate({width: "250px"},50);
});

$(".closeBtn").click(function (e) {
    $(".Homecontent").animate({ marginLeft: "0" }, 50);
    $("#sideBar").animate({ width: "0" }, 50);
  });

  
$("#Details .toggle").click(function (e) {
    $(this).next().slideToggle(500);
    $(".inner").not($(this).next()).slideUp(500);
  });

  $(document).ready(function() {
    let Deadline = new Date("21 December 2030 12:00:00 GMT+01:00").getTime();

    // Deadline = Date.parse(Deadline) / 1000;
    let  countdown = setInterval(function() {
    
  let now = new Date().getTime();
  let timeLeft = Deadline - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  $(".days").html(days + "<span> d</span>");
  $(".hours").html(hours + "<span> h</span>");
  $(".minutes").html(minutes + "<span> m</span>");
  $(".seconds").html(seconds + "<span> s</span>");

  if (timeLeft < 0) {
    clearInterval(countdown);
    $('#days').text("0 D");
    $('#hours').text("0 h");
    $('#minutes').text("0 m");
    $('#seconds').text("0 s");
}
}, 1000);
});



let maxLength = 100;

$("textarea").keyup(function (e) {
    let length = $(this).val().length;
    let remaining = maxLength - length;

    if (remaining <= 0) {
        // Prevent negative values and display the message
        $("#chars").html("<span style='color: red;'>You've already used all your characters</span>");
    } else {
        // Display the remaining characters
        $("#chars").html(remaining + "Character Remaining");
    }
});


