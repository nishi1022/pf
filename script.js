'use strict';


$(function () { //HTMLが読み込まれたら実行

    //クリックしたらconsoleに文字列を表示
    $('.detailbtn').on('click', function () {
        console.log('クリックしました');

        $(this).next().toggleClass('hidden');
    });

});

// $(function () {
// 	$('#sitedetail').click(function (evt) {
// 		$('#sitedetail_content').fadeIn();
// 		// クリックしたらクラス追加　ヘッダーの表示を消す
// 		// evt.currentTarget.classList.toggle('toggle_none');
// 		// document.getElementById('').classList.toggle('toggle_none');
// 	});
// 	$('#closeModal , #modalBg').click(function () {
// 		$('#modalArea').fadeOut();
// 	});
// });


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