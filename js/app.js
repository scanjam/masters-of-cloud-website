// Check the HTML Document is loaded and ready before running any other Javascript.
$(document).ready(function(event) { 
console.log('MoC Ready Sunshine')

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
    
    //This is the code to create the background image slideshow
    var index = 2;
    function cycleImages() {
        $('.slide-active').removeClass('slide-active');
        // if index == 2
        if (index < 3) {
            // set background image
            $('.slides > div:nth-child(' + index + ')').addClass('slide-active');
            // increment index by 1
            index++;
        } else {
            // set background image
            $('.slides > div:nth-child(' + index + ')').addClass('slide-active');
            // reset index to 0
            index = 1;
        }
    }

    setInterval(function() {
        cycleImages();
    }, 5000);
    



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
    
    animateValue("stat1", 14200, 15706, 3000);
    animateValue("stat2", 50, 137, 3000);
    animateValue("stat3", 1000, 1214, 3000);
    animateValue("stat4", 1220, 2343, 0);

    // This is the basic code for the waypoint jquery library which simply converts elements from ishidden to isactive depending
    // on how far the users have scrolled down the page (modified by offset). Transitions and timings are modified by css.
        $('.ishidden').waypoint(function() {
            $(this.element).removeClass('ishidden').addClass('isactive');

        },{
            offset: '99%'
        });

});