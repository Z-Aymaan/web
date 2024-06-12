(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $(document).ready(function() {
        $('.date').datetimepicker({
            format: 'L'
        });
        $('.time').datetimepicker({
            format: 'LT'
        });
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Activate carousel with interval
    $('#header-carousel').carousel({
        interval: 5000 // Change the interval as needed (in milliseconds)
    });

    // Team carousel
    

    // Vendor carousel
});

/*--counter*/
let valueDisplay = document.querySelectorAll('.num');
let interval = 1000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
//Cash on Delivery reserveNow//
function reserveNow() {
    var paymentMethod = document.getElementById("cashOnDelivery");
    if (paymentMethod.checked) {
        alert("Your order has been reserved. Payment will be collected upon delivery.");
        // Here you can add additional logic for handling the reservation
    } else {
        alert("Please select a payment method.");
    }
}

