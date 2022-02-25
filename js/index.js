$(document).on('click', '.search', function () {
    $('.search-bar').addClass('search-bar-active')
});

$(document).on('click', '.search-cancel', function () {
    $('.search-bar').removeClass('search-bar-active')
});


// login sign up
$(document).on('click', '.user, .already-account', function () {
    $('.form').addClass('login-active').removeClass('sign-up-active')
});


$(document).on('click', '.sign-up-btn', function () {
    $('.form').addClass('sign-up-active').removeClass('login-active')
});


$(document).on('click', '.form-cancel', function () {
    $('.form').removeClass('login-active')
});


$(document).on('click', '.sign-up-btn', function () {
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});

$(document).ready(function () {
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        item: 1,
        auto: true,
        slideMargin: 0,
        loop: true
    });
});

$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

// nav
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navigation').addClass('fix-nav');
    } else {
        $('.navigation').removeClass('fix-nav');
    }
}
);

// toggle
$(document).ready(function () {
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});


function scroll() {
    var elmnt = document.getElementById("unggulan");
    elmnt.scrollIntoView();
}
// scolll id

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});





