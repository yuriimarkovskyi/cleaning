$(document).ready(function() {
	$('.header-burger').click(function(event) {
		$('.header-burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	// Закрытие меню при клике на пункт меню
	$('.menu__link').click(function(event){
		$('.header-burger,.menu').removeClass('active');
		$('body').removeClass('lock');
	});
	$('.find-price__down-arrow').click(function(event){
		$('.find-price__body').css({'height': 'auto', 'overflow': 'visible'});
		$('.find-price__down-arrow').css('display', 'none');
	});
	function callback(){
		if ($(window).width() <= 1100) {
			$('.menu__dropdown').removeClass('dropdown mycustom-scroll');
		}
		if ($(window).width() > 1100) {
			$('.menu__dropdown').addClass('dropdown mycustom-scroll');
		}
	}
	$(window).on('resize', callback);
	callback();
});