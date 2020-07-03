/*
	Introspect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');

	});

})(jQuery);

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
        };


        // slider
     
$(document).on("click","a",function(e){
        e.preventDefault();
        var id = $(this).attr("href"),
            topSpace = 30;
    //alert(id);
        $('html, body').animate({
          scrollTop: $(id).offset().top - topSpace
        }, 800);
    });
// test code


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".content").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

var win = $(window);
var allMods = $(".content");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});








// $(document).ready(function() {
  
//   var $slider = $(".slider"),
//       $slideBGs = $(".slide__bg"),
//       diff = 0,
//       curSlide = 0,
//       numOfSlides = $(".slide").length-1,
//       animating = false,
//       animTime = 500,
//       autoSlideTimeout,
//       autoSlideDelay = 2600,
//       $pagination = $(".slider-pagi");
  
//   function createBullets() {
//     for (var i = 0; i < numOfSlides+1; i++) {
//       var $li = $("<li class='slider-pagi__elem'></li>");
//       $li.addClass("slider-pagi__elem-"+i).data("page", i);
//       if (!i) $li.addClass("active");
//       $pagination.append($li);
//     }
//   };
  
//   createBullets();
  
//   function manageControls() {
//     $(".slider-control").removeClass("inactive");
//     if (!curSlide) $(".slider-control.left").addClass("inactive");
//     if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
//   };
  
//   function autoSlide() {
//     autoSlideTimeout = setTimeout(function() {
//       curSlide++;
//       if (curSlide > numOfSlides) curSlide = 0;
//       changeSlides();
//     }, autoSlideDelay);
//   };
  
//   autoSlide();
  
//   function changeSlides(instant) {
//     if (!instant) {
//       animating = true;
//       manageControls();
//       $slider.addClass("animating");
//       $slider.css("top");
//       $(".slide").removeClass("active");
//       $(".slide-"+curSlide).addClass("active");
//       setTimeout(function() {
//         $slider.removeClass("animating");
//         animating = false;
//       }, animTime);
//     }
//     window.clearTimeout(autoSlideTimeout);
//     $(".slider-pagi__elem").removeClass("active");
//     $(".slider-pagi__elem-"+curSlide).addClass("active");
//     $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
//     $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
//     diff = 0;
//     autoSlide();
//   }

//   function navigateLeft() {
//     if (animating) return;
//     if (curSlide > 0) curSlide--;
//     changeSlides();
//   }

//   function navigateRight() {
//     if (animating) return;
//     if (curSlide < numOfSlides) curSlide++;
//     changeSlides();
//   }

//   $(document).on("mousedown touchstart", ".slider", function(e) {
//     if (animating) return;
//     window.clearTimeout(autoSlideTimeout);
//     var startX = e.pageX || e.originalEvent.touches[0].pageX,
//         winW = $(window).width();
//     diff = 0;
    
//     $(document).on("mousemove touchmove", function(e) {
//       var x = e.pageX || e.originalEvent.touches[0].pageX;
//       diff = (startX - x) / winW * 70;
//       if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
//       $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
//       $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
//     });
//   });
  
//   $(document).on("mouseup touchend", function(e) {
//     $(document).off("mousemove touchmove");
//     if (animating) return;
//     if (!diff) {
//       changeSlides(true);
//       return;
//     }
//     if (diff > -8 && diff < 8) {
//       changeSlides();
//       return;
//     }
//     if (diff <= -8) {
//       navigateLeft();
//     }
//     if (diff >= 8) {
//       navigateRight();
//     }
//   });
  
//   $(document).on("click", ".slider-control", function() {
//     if ($(this).hasClass("left")) {
//       navigateLeft();
//     } else {
//       navigateRight();
//     }
//   });
  
//   $(document).on("click", ".slider-pagi__elem", function() {
//     curSlide = $(this).data("page");
//     changeSlides();
//   });
  
// });