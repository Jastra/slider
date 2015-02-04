$(document).ready(function(){

	heightTopbar();
	heightSlider();
	
	$(window).resize(function() {
		heightTopbar();
		heightSlider();
	});
	
});

function heightTopbar() {
	$("#badge-left").css("height", $("#badge-left").width()+"px");
	if( $("#badge-left").width() >= 200 ) {
		$("#top").css("width", $(window).width()-201-$("#image-right").width()+"px");
		$("#left_content").css("width", $(window).width()-201-$("#image-right").width()+"px");
	} else {
		$("#top").css("width", "70%");
		$("#left_content").css("width", "70%");
	}
	$("#top").css("height", $("#badge-left").width()+"px");
	$("#image-right").css("height"
	, $("#image-right").width()+"px");
}


function heightSlider() {
	$("#slider").height($(window).height()-$("#header").height());
}