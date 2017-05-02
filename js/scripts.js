////////////////
// MOBILE NAV //
////////////////
navOpen = false;

/* MOBILE NAV MANAGEMENT */
$("#nav_mobile, nav a").on("click", function(){
	if (!navOpen) {
		navOpen = true;
		$("#nav_mobile, nav").addClass("navOpen");
	} else {
		navOpen = false;
		$("#nav_mobile, nav").removeClass("navOpen");      
	}
});



////////////
// SLIDER //
////////////
function init_slider() {
    if ($(window).height() < 768 && $(window).width() > 992) {
        $('.cycle-slideshow').cycle();
        $(".cycle-pager li:first-child").addClass("cycle-pager-is-active");
    }
}



////////////////////
// DOCUMENT.READY //
////////////////////
$(document).ready(function() {
});



///////////////////
// WINDOW.RESIZE //
///////////////////
$(window).resize(function() {
         
});
