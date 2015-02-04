$(document).ready(function(){	
	
	$("#nav-bar .nav").click(function(){
		var txt = $(this).attr("class");
		$("#nav-bar .nav.active").removeClass("active");
		$(this).addClass("active");
		var numb = txt.match(/\d/g);
		$("#slide .single-slide.active").fadeOut();
		$("#slide .slide"+numb).addClass("active").fadeIn();
	});
	
});