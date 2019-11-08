(function ($) {
    'use strict';

    $(window).on("load", function() {
		// checkSize();
	    // $(window).resize(checkSize);
	    
	    //preloader
	    $("#preloader").delay(300).animate({
	      "opacity" : "0"
	      }, 500, function() {
	      $("#preloader").css("display","none");
	    });

	  });

    // background image
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	// Activate owlCarousel
	// $('.active').owlCarousel({
	//     loop:true,
	//     margin:0,
	//     smartSpeed: 800,
	//     nav: true,
	//     dots: true,
	//     navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
	//     //autoplay: true,
	//     responsiveClass:true,
	//     responsive:{
	//         0:{
	//             items: 1
	//         },
	//         1000:{
	//             items:1
	//         }
	//     }
	// });

	// Activate lightcase
    // $('a[data-rel^=lightcase]').lightcase();



})(jQuery);