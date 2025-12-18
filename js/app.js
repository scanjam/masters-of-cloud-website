// Check the HTML Document is loaded and ready before running any other Javascript.
$(document).ready(function(event) { 
console.log('MoC Ready Sunshine')

    // Improved hover effects for course cards
    $('.coursecontainer div').hover(
        function() {
            // Mouse enter
            $(this).addClass('course-hover');
        },
        function() {
            // Mouse leave
            $(this).removeClass('course-hover');
        }
    );

    //This is the Code to expand the NAV on click (show or hide)
    $('nav i').on('click', function(){
        console.log('nav i - clicked')
        $('nav ul').toggleClass('active');
        });

    //This is the code to display the 'home' button after scroll
    // When the user scrolls down 20px from the top of the document, show the button
    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
    
    //Improved background image slideshow with better performance
    var slideIndex = 1;
    var totalSlides = $('.slides > div').length;
    
    function cycleImages() {
        // Remove active class from all slides
        $('.slides > div').removeClass('slide-active');
        
        // Add active class to current slide
        $('.slides > div:nth-child(' + slideIndex + ')').addClass('slide-active');
        
        // Increment index, reset to 1 if at end
        slideIndex = slideIndex >= totalSlides ? 1 : slideIndex + 1;
    }

    // Use requestAnimationFrame for better performance
    var slideInterval = setInterval(cycleImages, 5000);
    



    //Animate Counter for Stats
    function animateValue(id, start, end, duration) {
        var range = end - start;
        var current = start;
        var increment = end > start? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementById(id);
        var timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
    animateValue("stat1", 17000, 18231, 3000);
    animateValue("stat2", 100, 143, 3000);
    animateValue("stat3", 800, 885, 3000);
    animateValue("stat4", 9000, 10164, 0);

    // This is the basic code for the waypoint jquery library which simply converts elements from ishidden to isactive depending
    // on how far the users have scrolled down the page (modified by offset). Transitions and timings are modified by css.
        $('.ishidden').waypoint(function() {
            $(this.element).removeClass('ishidden').addClass('isactive');

        },{
            offset: '99%'
        });

});