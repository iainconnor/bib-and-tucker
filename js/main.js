$(document).ready ( function() {

	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	var firstTop = $('.paralax:first').offset().top;

	function updateParalax() {
		var windowTop = $window.scrollTop();
		$('.paralax').each ( function() {
			var $element = $(this);
			var elementTop = $element.offset().top;
			var elementHeight = $element.outerHeight();

			if ( elementTop + elementHeight < windowTop || elementTop > windowTop + windowHeight )
				return;

			$element.css({backgroundPosition: "50% " + Math.round((firstTop - windowTop) * (0.1 * (5-$element.data("paralax-index")))) + "px"});
		});
	}

	$window.bind('scroll', updateParalax);
	updateParalax();

});