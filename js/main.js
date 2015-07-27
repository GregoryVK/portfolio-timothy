$(document).ready(function() {

	$("#portfolio_grid").mixItUp();


	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	/*
	 * Animated header with my name and description
	*/
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("bounceInLeft", "bounceInLeft");
	$(".logo").animated("zoomIn", "zoomIn");

	$(".top_wrapper").next().height($(".top_wrapper").height())
	$(window).scroll(function() {
	    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    if (scrollTop > 500) {
	        $('div.top_wrapper').css('opacity',0);
	    }
	    else {
	        $('div.top_wrapper').css('opacity',1-scrollTop/500);
	    }
	}).scroll()


	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");


	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	})
	});


$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});


