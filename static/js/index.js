window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
	// Initialize Bulma carousel and slider
	var options = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
	}

	bulmaCarousel.attach('.carousel', options);
	bulmaSlider.attach();
});
