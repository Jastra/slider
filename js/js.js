$(document).ready(function(){

	heightSlider();
	
	$(window).resize(function() {
		heightSlider();
	});
	
});



function heightSlider() {
	$("#slider").height($(window).height()-$("#header").height());
}