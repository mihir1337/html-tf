(function ($) {
    'use strict';

    $(document).on('ready', function () {

        /*-- Button-Hover-Effect-Script --*/
        $( '.mouse-dir' ).on( 'mouseenter', function ( e ) {
            var parentOffset = $( this ).offset( ),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            if ( $( this ).find( '.mouse-dir .dir-part' ) ) {
                $( '.mouse-dir .dir-part' ).css( {
                    top: relY,
                    left: relX,
                } );
            }
        } );

        $( '.mouse-dir' ).on( 'mouseout', function ( e ) {
            var parentOffset = $( this ).offset( ),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            if ( $( this ).find( '.mouse-dir .dir-part' ) ) {
                $( '.mouse-dir .dir-part' ).css( {
                    top: relY,
                    left: relX,
                } );
            }
        } );

        /*-- Mobile-Menu-Active --*/
        // $('.primary-menu').slicknav({
        //     label: '',
        //     duration: 500,
        //     prependTo: '',
        //     closedSymbol: '<i class="fa fa-angle-right"></i>',
        //     openedSymbol: '<i class="fa fa-angle-right"></i>',
        //     appendTo: '.mainmenu-area',
        //     menuButton: '.navi-trigger',
        //     closeOnClick: 'true' // Close menu when a link is clicked.
        // });

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
 //    $('a[data-rel^=lightcase]').lightcase();

    });

    $(window).on("load", function() {

	    background();
	    //preloader
	    $("#preloader").delay(300).animate({
	    	"opacity" : "0"
	    	}, 500, function() {
	    	$("#preloader").css("display","none");
	    });

	    // scroll up
	    $('body').append('<a href="#" id="scrollUp"><i class="fal fa-long-arrow-up"></i></a>');
        $('#scrollUp').on('click',function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
            return false;
        });

        /*-- WoW-Animation-JS --*/
        new WOW().init({
            mobile: false,
        });

	});

	$(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
            $('#scrollUp').addClass('active');    // Fade in the arrow
        } else {
            $('#scrollUp').removeClass('active');   // Else fade out the arrow
        }
    });

    // background image
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}


})(jQuery);