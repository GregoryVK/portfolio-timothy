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
	$(".top_text p, .section_header").animated("bounceInLeft", "bounceInLeft");
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
	/*
	 * Animated About divs
	*/
	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	/*
	 * Makes top header resize to window.height
	*/
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	})

	/*
	 * Popup for images in about block and portfolio block
	*/
	$(".popup").magnificPopup({type: "image"});
	$(".popup_content").magnificPopup({type: "inline", midClick: "true", showCloseBtn: true});

	/*
	 * This adds appropriate work number to each <a> and .port_descr.
	*/
	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id",  "work_" + i);
	});

});

/*
 * This toggle(remove/add) class to block
*/
$(".toggle_menu").click(function() {
	$(".sandwich").toggleClass("active");
});


$(".top_menu ul a").click(function() {
	$(".top_menu").fadeOut(600);
	$(".sandwich").toggleClass("active");
});
//------------------------------------------

/*
 * Animates top_menu block <li> elements
*/
$(".toggle_menu").click(function() {
	if($(".top_menu").is(":visible")) {
		$(".top_menu").fadeOut(600);
		$(".top_menu li a").removeClass("fadeInUp animated");
	}
		else {
		$(".top_menu").fadeIn(600);
		$(".top_menu li a").addClass("fadeInUp animated");
	};

});


$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});


