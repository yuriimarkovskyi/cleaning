$(document).ready(function(){
	function callback(){
		if ($(window).width() <= 768) {
			$('.reasons').addClass('owl-carousel');
			$('.selection-gift').addClass('owl-carousel');
			$('.block-of-advantages').addClass('owl-carousel');
			$('.block-of-clients').addClass('owl-carousel');
			$('.mini-advantages').addClass('owl-carousel');
			$('.reasons').owlCarousel({
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				dotsClass: 'slider-dots reasons__dots',
				dotClass: 'slider-dot',
				margin: 5,
				items: 1
			})
			$('.selection-gift').owlCarousel({
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				dotsClass: 'slider-dots selection-gift__dots',
				dotClass: 'slider-dot',
				margin: 5,
				items: 1
			})
			$('.block-of-advantages').owlCarousel({
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				dotsClass: 'slider-dots block-of-advantages__dots',
				dotClass: 'slider-dot',
				margin: 30,
				items: 1
			})
			$('.block-of-clients').owlCarousel({
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				dotsClass: 'slider-dots block-of-clients__dots',
				dotClass: 'slider-dot',
				margin: 5,
				items: 1
			})
			$('.mini-advantages').owlCarousel({
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				dotsClass: 'slider-dots mini-advantages__dots',
				dotClass: 'slider-dot',
				margin: 5,
				items: 1
			})
		}
		if ($(window).width() > 768) {
			$('.reasons').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			$('.reasons').find('.owl-stage-outer').children().unwrap();
			$('.selection-gift').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			$('.selection-gift').find('.owl-stage-outer').children().unwrap();
			$('.block-of-advantages').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			$('.block-of-advantages').find('.owl-stage-outer').children().unwrap();
			$('.block-of-clients').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			$('.block-of-clients').find('.owl-stage-outer').children().unwrap();
		}
	}
	$(window).on('resize', callback);
	callback();
	$('.reviews-slider').owlCarousel({
		loop: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: true,
		navText: ['',''],
		navContainerClass: 'reviews-slider-nav',
		dotsClass: 'slider-dots reviews-slider__dots ',
		dotClass: 'slider-dot',
		margin: 25,
		items: 1
	})
	$('.certificates-slider').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: true,
		navText: ['',''],
		navContainerClass: 'certificates-slider-nav ',
		dotsClass: 'slider-dots certificates-slider__dots',
		dotClass: 'slider-dot',
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			768: {
				items: 2,
				margin: 20
			}
		}
	})
	$('.team-slider').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: true,
		navText: ['',''],
		navContainerClass: 'team-slider-nav',
		dotsClass: 'slider-dots team-slider__dots',
		dotClass: 'slider-dot',
		margin: 10,
		items: 1,
		responsive: {
			0: {
				stagePadding: 25
			},
			515: {
				stagePadding: 50
			},
			715: {
				stagePadding: 100
			},
			950: {
				stagePadding: 200
			},
			1100: {
				stagePadding: 276
			}
		}
	})
});