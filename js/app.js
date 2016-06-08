
// animatecss class functions  - Animate upon reaching the div and not on pageload
$(function(){
    
    $('.myFadeUp').waypoint(function(){$(this).addClass('animated fadeInUp');},{offset:'110%'});
    $('.myZoomIn').waypoint(function(){$(this).addClass('animated zoomIn');},{offset:'110%'});
    
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
