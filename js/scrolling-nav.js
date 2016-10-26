//jQuery to collapse the navbar on scroll
$(document).ready(function(){
  $('.bxslider').bxSlider();
});
$( function() {
    $( "#tabs" ).tabs({
      event: "mouseover"
    });
  } );

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
		$(".logo").addClass("top-nav-collapse_img");
		$(".navbar-collapse ul ").addClass("navcolp");
		$(".navbar-brand").addClass("navbar-brandcolp");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
		$(".logo").removeClass("top-nav-collapse_img");
		$(".navbar-collapse ul ").removeClass("navcolp");
		$(".navbar-brand").removeClass("navbar-brandcolp");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
