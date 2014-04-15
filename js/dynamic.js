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
});
