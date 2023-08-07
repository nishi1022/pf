'use strict';

jQuery(function($) {
	const nav = $('#top_fixed'),
	offset = nav.offset();
	$(window).scroll(function () {
	  if($(window).scrollTop() > offset.top) {
	    nav.addClass('fixed');
	  } else {
	    nav.removeClass('fixed');
	  }
	});
});



$(function () {
	$('#openModal').click(function(){
		$('#modalArea').fadeIn();
	});
	$('#closeModal , #modalBg').click(function(){
	  $('#modalArea').fadeOut();
	});
  });