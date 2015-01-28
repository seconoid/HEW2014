$(function () {
	$("img").hide();
});


$(function() {
	// ページ内スクロール
	$(".scrollNext").click(function () {
		var i = $(".scrollNext").index(this) + 1;
		var p = $(".content").eq(i).offset().top;
		$('html, body').animate({ scrollTop: p }, 600);
		return false;
	});

	// トップへスクロール
	$(".scrollTop").click(function () {
		$('html, body').animate({ scrollTop: 0}, 1500);
	});
});