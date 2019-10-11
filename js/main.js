(function() {
	var spinnerElem, contentElem;

	function bindClick() {
		contentElem = $("#pills-tabContent > .content");
		spinnerElem = $(".loadable-content-spinner");
		
		$('.nav-pills > a').click(function() {
			loadSrc($(this).attr('data-src'));
		});
	}

	function loadSrc(src) {
		$(spinnerElem).removeClass('hidden');
		$(contentElem).load(src, function() {
			$(spinnerElem).addClass('hidden');
		});
	}

	$(document).ready( function() {
		bindClick();
		
		var src = $("[data-panel-target='apps']").attr('data-src');
		loadSrc(src);
	});
})($);
