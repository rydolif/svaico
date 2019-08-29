$(function() {
	//--------------------------------------scroll------------------------------
	$('.news__comment_box').jScrollPane();

	//------------------------------гамбургер-----------------------------
	$('.hamburger').click(function() {
		$(this).toggleClass('hamburger--active');
		$('.header').toggleClass('header--active');
		$('.nav').toggleClass('nav--active');
	});

	//------------------------------гамбургер js-----------------------------
	$('.hamburger').click(function() {
	  $(this).toggleClass('hamburger-active');
	  $('nav').toggleClass('nav-active');
	  $('header').toggleClass('header-menu');
	});
});


//--------------------------------------scroll------------------------------
  $(window).resize(function(event) {
   $('.news__comment_box').jScrollPane();
  });