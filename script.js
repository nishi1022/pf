'use strict';

jQuery(function ($) {
	const nav = $('#top_fixed'),
		offset = nav.offset();
	$(window).scroll(function () {
		if ($(window).scrollTop() > offset.top) {
			nav.addClass('fixed');
		} else {
			nav.removeClass('fixed');
		}
	});
});



$(function () {
	$('#openModal').click(function () {
		$('#modalArea').fadeIn();
	});
	$('#closeModal , #modalBg').click(function () {
		$('#modalArea').fadeOut();
	});
});

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,
//     slidesPerView: 5,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false
//     },

// });


//   Babel React