$(document).ready(function () {
    // Hide and Show Effect
    $(".about .about-content .image img").click(function () {
      $(this).hide(500, function () {
        $(this).show(500);
      });
    });
  
    // Fade Effect
    $(".contact .info .link").hover(
      function () {
        $(this).fadeTo(500, 0.5);
      },
      function () {
        $(this).fadeTo(500, 1);
      }
    );
  
    // Slide Effect
    $(".contact .info .social").click(function () {
      $(this).next(".footer").slideToggle(500);
    });
  
    // Animate Effect
    $(".about .about-content .text").click(function () {
      $(this).animate(
        {
          fontSize: "20px",
          opacity: 0.8,
          paddingLeft: "20px",
        },
        800
      );
    });
  
    // Stop Effect
    $(".about .about-content .text").dblclick(function () {
      $(this).stop();
    });
  
    // Callback Function
    $(".footer span").click(function () {
      $(this).fadeOut(500, function () {
        alert("Footer text faded out!");
      });
    });
  
    // Chaining Effects
    $(".about .about-content .text p:first-of-type").click(function () {
      $(this)
        .css("color", "red")
        .slideUp(500)
        .slideDown(500)
        .fadeOut(500)
        .fadeIn(500);
    });
  });