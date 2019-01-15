////////////////////////////////////////////////////////////////
//////////// TABLE OF CONTENT /////////////////////////////////
/////////// 1. MENU TOGGLER //////////////////////////////////
/////////// 2. HEADER STICK /////////////////////////////////
/////////// 3. WOW SETUP ///////////////////////////////////
/////////// 4. PRELOADER SETUP ////////////////////////////
/////////// END OF TABLE OF CONTENT //////////////////////
/////////////////////////////////////////////////////////



(function ($) {
"use strict";


//////////////////////////////////////////
/////////// 1. MENU TOGGLER /////////////
////////////////////////////////////////


var toggle_button = $('#header button'),
toggle_menu = $('#header #main_navigation ul');

toggle_button.on('click', function () {
	toggle_menu.slideToggle( "slow" );
});


////////////////////////////////////////
/////////// 2. HEADER STICK ///////////
//////////////////////////////////////

$(window).bind('scroll', function(){
if($(this).scrollTop() > 10) {
$('header').addClass('header_stick'); }
else if($(this).scrollTop() <= 10) {
$('header').removeClass('header_stick'); }
});



/////////////////////////////////////////
/////////// 3. WOW SETUP ///////////////
///////////////////////////////////////


new WOW().init();



/////////////////////////////////////////
/////////// 4. PRELOADER SETUP /////////
///////////////////////////////////////


$(document).on('ready', function() {		
	$('.preloader').delay(2000).fadeOut(500);
  $('[data-toggle="tooltip"]').tooltip();
});

var toggle = true;
$(document).on("keypress", function(e) {
	if ( e.which === 92 && toggle) {
		console.log( "show tracker" );
		$('#counter').show();
	}
	else {
        console.log( "hide tracker" );
        $('#counter').hide();
	}
	toggle = !toggle;
});

})(jQuery);

