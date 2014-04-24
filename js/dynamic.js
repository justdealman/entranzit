$(document).ready(function() {
	$('input[type="radio"], input[type="file"], input[type="checkbox"]').uniform();
	$('.form .switch').hide();
	$('.category > p > span').click(function() {
		$(this).parents('.category').find('.radio span').removeClass('checked');
		$(this).parents('.category').find('input[type="radio"]').prop('checked', false);
		var current = $(this).attr('title');
		$('.form').find('div.switch').slideUp({duration: 250, easing: 'easeOutQuart'});
		$('.form').find('div.switch.'+current).delay(250).slideDown({duration: 250, easing: 'easeInQuart'});
		$(this).find('.radio > span').addClass('checked');
		$(this).find('input[type="radio"]').prop('checked', true);
		return false;
	}).filter(':first').click();
	$('.team > div > div:last-child').css({'margin-bottom': '0'});
	$('.files .onemore').bind('click', function() {
		$(this).before('<p><span>Еще один документ</span> <input type="file"></p>');
		$(this).prev().find('input[type="file"]').uniform();
		return false;
	});
	$('.user li h5').each(function() {
		if ( $(this).children().height() == 18 ) {
			$(this).children().css({'margin-top': '9px'});
		}
	});
	$('.requestlist th[colspan="2"]').css({'text-align': 'center'});
	$('select').selectbox();
	$('.requestlist tr:nth-child(odd) td').css({'background': '#f7f7f7'});
	$('.message').append('<span class="close"></span>');
	$('.message .close').bind('click', function() {
		$(this).parent().fadeOut(0);
		return false;
	});
	var bh = 0;
	$('div.modal').each(function() {
		$(this).append('<span class="close"></span>');
		var mh = ($(this).height()+50)/2;
		$(this).css({'margin-top': -mh+'px'});
	});
	$('div.modal .close').bind('click', function() {
		$(this).parent().fadeOut(250);
		$('.fade').fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bh);
		return false;
	});
	$('.fade').bind('click', function() {
		$('div.modal, .fade').fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bh);
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27) {
			$('.fade, div.modal').fadeOut(250);
			$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
			$('body').scrollTop(bh);
		}
	});
	$('button.approve, button.reject').bind('click', function() {
		var target = $(this).attr('class');
		$('.fade, .modal.'+target).fadeIn(250);
		bh = $('body').scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
});
