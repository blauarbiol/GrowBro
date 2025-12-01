/*  ---------------------------------------------------
  Template Name: DJoz
  Description:  DJoz Music HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    
    /*--------------------------
        Event Slider
    ----------------------------*/
    $(".event__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });
    
    /*--------------------------
        Videos Slider
    ----------------------------*/
    $(".videos__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 4,
            },
            768: {
                items: 3,
            },
            576: {
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end
    

    // Use this for real timer date
    /* var timerdate = "2020/01/01"; */

	$("#countdown-time").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='countdown__item'><span>%D</span> <p>Days</p> </div>" + "<div class='countdown__item'><span>%H</span> <p>Hours</p> </div>" + "<div class='countdown__item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='countdown__item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Barfiller
	--------------------*/
    $('#bar1').barfiller({
        barColor: "#ffffff",
    });

    $('#bar2').barfiller({
        barColor: "#ffffff",
    });

    $('#bar3').barfiller({
        barColor: "#ffffff",
    });

    /*-------------------
		Nice Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#111111",
        cursorwidth: "5px",
        background: "#e1e1e1",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });

    // T-shirt size selection
document.addEventListener('DOMContentLoaded', function() {
  const sizeButtons = document.querySelectorAll('.size-btn');
  sizeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      sizeButtons.forEach(b => {
        b.classList.remove('btn-success');
        b.classList.add('btn-outline-secondary');
      });
      this.classList.remove('btn-outline-secondary');
      this.classList.add('btn-success');
    });
  });
});


})(jQuery);

// RECIPE MODAL
$(document).ready(function () {

    const modal = $('#recipeModal');
    const modalImg = $('#modalImg');
    const modalTitle = $('#modalTitle');
    const modalTime = $('#modalTime');
    const modalIngredients = $('#modalIngredients');
    const modalSteps = $('#modalSteps');

    // Click recipe card → open modal
    $('.recipe__item').on('click', function () {
        let title = $(this).data('title');
        let time = $(this).data('time');
        let img = $(this).data('img');
        let ingredients = $(this).data('ingredients');
        let steps = $(this).data('steps');

        modalImg.attr('src', img);
        modalTitle.text(title);
        modalTime.text(time);

        // Ingredients
        modalIngredients.empty();
        ingredients.forEach(item => {
            modalIngredients.append(`<li>${item}</li>`);
        });

        // Steps
        modalSteps.empty();
        steps.forEach(step => {
            modalSteps.append(`<li>${step}</li>`);
        });

        modal.css("display", "flex").hide().fadeIn(200);
    });

    // Close modal
    $('.recipe-modal__close').on('click', function () {
        modal.fadeOut(200);
    });

    // Click outside content → close modal
    $(document).on('click', function (e) {
        if ($(e.target).is('#recipeModal')) {
            modal.fadeOut(200);
        }
    });

});


/*-------------------
		Product Switcher
	--------------------- */
// === Product Image Switcher ===
document.addEventListener("DOMContentLoaded", function() {
  const mainImg = document.querySelector(".product__main__img img");
  const thumbs = document.querySelectorAll(".product__thumbs img");

  if (mainImg && thumbs.length > 0) {
    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        // Update the main image source
        mainImg.src = thumb.src;

        // Update active state
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.discography__item__pic .image-slider');

    sliders.forEach(slider => {
        const images = Array.from(slider.querySelectorAll('img'));
        const firstClone = images[0].cloneNode(true);
        slider.appendChild(firstClone);

        let index = 0;
        const total = images.length;

        function slide() {
            index++;
            slider.style.transition = 'transform 1s linear';
            slider.style.transform = `translateX(-${index * 100}%)`;

            if (index >= total) {
                setTimeout(() => {
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0)';
                    index = 0;
                }, 1000);
            }
        }

        let interval;

        slider.parentElement.addEventListener('mouseenter', () => {
            // Trigger the first slide immediately
            slide();
            interval = setInterval(slide, 2000); // then continue every 2s
        });

        slider.parentElement.addEventListener('mouseleave', () => {
            clearInterval(interval);
            slider.style.transition = 'transform 0.5s ease';
            slider.style.transform = 'translateX(0)';
            index = 0;
        });
    });
});