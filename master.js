$(document).ready(function () {
    $(".list").click(function () {
      const dataValue = $(this).attr("data-filter");
      if (dataValue == "all-items") {
        $(".item").show();
      } else {
        $(".item")
          .not("." + dataValue)
          .hide();
        $(".item")
          .filter("." + dataValue)
          .show();
      }
    });
  });
  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  
 /* ===========================================================
 * script.js v1.0
 * ===========================================================
 * Copyright 2015 Shivam Pandya - Tutorial Drive.
 * https://www.github.com/tutorialdrive
 *
 * Bootstrap Vertical Image Showcase v1.0
 * Create an Vertical Thumbnail Carousel For Twitter Bootstrap v3.0.3
 *
 *
 * License: MIT License
 * https://opensource.org/licenses/MIT
 *
 * ========================================================== */

$(document).ready(function () {
    $("#myCarousel").carousel({
      interval: false
      //interval: 2000
    });
    $(".small-thumbnail img").click(function () {
      $("#DataDisplay").attr("src", $(this).attr("data-display"));
    });
  });
  