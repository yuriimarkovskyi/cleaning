$(document).ready(function($) {
	// Открытие окна по клику
	$('.callback-modal-open').click(function() {
		// Добавление body класса lock, который делает невозможным прокрутку страницы
		$('body').addClass('lock');
		$('.callback-modal-fade').fadeIn(0);
		return false;
	});
	$('.price-modal-open').click(function() {
		// Добавление body класса lock, который делает невозможным прокрутку страницы
		$('body').addClass('lock');
		$('.find-out-the-price-modal-fade').fadeIn(0);
		return false;
	});
	// Закрытие формы при клике на "Закрыть"
	$('.modal-close').click(function() {
		$(this).parents('.modal-fade').fadeOut(0);
// Удаление у body класса lock
$('body').removeClass('lock');
// Очистка полей формы при ее закрытии
$('input[type="text"]').val('');
return false;
});
	// Закрытие формы при клике на Esc
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-fade').fadeOut(0);
			$('body').removeClass('lock');
			$('input[type="text"]').val('');
		}
	});
	// Закрытие формы при клике по фону
	$('.modal-fade').click(function(e) {
		if ($(e.target).closest('.modal').length == 0) {
			$(this).fadeOut(0);
			$('body').removeClass('lock');
			$('input[type="text"]').val('');
		}
	});
});