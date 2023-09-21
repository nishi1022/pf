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
	$('#openModal').click(function (evt) {
		$('#modalArea').fadeIn();
		// クリックしたらクラス追加　ヘッダーの表示を消す
		// evt.currentTarget.classList.toggle('toggle_none');
		// document.getElementById('').classList.toggle('toggle_none');
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


// 繰り返し表示
let num = 5;
let count = 1;

while (num <= count) {
	document.getElementById('illustgrid').innerHTML += '';
	count ++;
};