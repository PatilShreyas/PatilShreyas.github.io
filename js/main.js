(function() {
	var spinnerElem, contentElem;

	function bindClick() {
		contentElem = $("#pills-tabContent > .content");
		spinnerElem = $(".loadable-content-spinner");
		
		$('.nav-pills > a').click(function() {
			loadSrc($(this).attr('data-src'));
		});
	}
	
	function animateCardsVisible() {
		
		var ms_card_delay = 100;
		var delay = 0;
		var cards = $('.card-columns .card');
		
		$(cards).each(function() {
			console.log(this);
			delay += ms_card_delay;
			var elem = $(this);
			setTimeout(function() {
				$(elem).addClass('visible');
			}, delay);
		});
	}

	function loadSrc(src) {
		$(spinnerElem).removeClass('hidden');
		$(contentElem).load(src, function() {
			$(spinnerElem).addClass('hidden');
			animateCardsVisible();
		});
	}

	$(document).ready( function() {
		bindClick();
		
		var src = $("[data-panel-target='apps']").attr('data-src');
		loadSrc(src);
	});
})($);
