$(function() {
     $(window).scroll(function() {
          var value = $(this).scrollTop(); //スクロール値を取得
          $('#scrollValue').text(value);
     });
});

$(function() {
	// ページ内スクロール
	$('.scrollNext').click(function () {
		var i = $('.scrollNext').index(this) + 1;
		var p = $('.content').eq(i).offset().top;
		$('html, body').animate({ scrollTop: p }, 1200);
		return false;
	});

	// トップへスクロール
	$('.scrollTop').click(function () {
		$('html, body').animate({ scrollTop: 0}, 2000);
		return false;
	});
});

$(document).ready(function() {
    $('a.openwin').openwin({
    	option : {
    		width: 500,
    		height: 300,
       	}
    });
});

$(function() {
	// クリックで色変え
	$('#men').click(function () {
		$('body').stop().animate({ backgroundColor: '#80D8FF'}, 800);
	});
	$('#women').click(function () {
		$('body').stop().animate({ backgroundColor: '#FF80AB'}, 800);
	});
	$('#default').click(function () {
		$('body').stop().animate({ backgroundColor: '#f3f2f7'}, 800);
	});
});