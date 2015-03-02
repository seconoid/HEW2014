// パララックススクロール
$(function() {
	var PosTop = 700;
    var kitchenPosTop = $('#kitchen').offset().top;
    var bathroomPosTop = $('#bathroom').offset().top;
    $(window).scroll(function() {
        var value = $(this).scrollTop(); //スクロール値を取得
        $('#scrollValue').text(value);

        // スクロール値に応じてコンテンツを移動
        if ( value > 0 ){
	        $('#kitchen').css('top', PosTop - value );
	    } else {
	    	$('#kitchen').css('top', PosTop);
	    }
	    if ( value >= PosTop ){
	    	$('#kitchen').css('top', 0);
	        $('#bathroom').css('top', PosTop * 2 - value );
	    } else {
	    	$('#bathroom').css('top', PosTop);
	    }
	    if ( value >= PosTop * 2 ){
	    	$('#bathroom').css('top', 0);
	        $('#living').css('top', PosTop * 3 - value );
	    } else {
	    	$('#living').css('top', PosTop);
	    }
	    if ( value >= PosTop * 3 ){
	    	$('#living').css('top', 0);
	        $('#entrance').css('top', PosTop * 4 - value );
	    } else {
	    	$('#entrance').css('top', PosTop);
	    }
	    if ( value >= PosTop * 4 ){
	    	$('#entrance').css('top', 0);
	        $('#bye').css('top', PosTop * 5 - value );
	    } else {
	    	$('#bye').css('top', PosTop);
	    }
    });
});

// ページ内スクロール
$(function() {
	$('.scrollNext').click(function () {
		var i = $('.scrollNext').index(this) + 1;
		var p = $('.content').eq(i).offset().top;
		$('html, body').animate({ scrollTop: p }, 1410);
		return false;
	});

	// トップへスクロール
	$('.scrollTop').click(function () {
		$('html, body').animate({ scrollTop: 0}, 2000);
		return false;
	});
	
});

// 小ウィンドウを表示
$(document).ready(function() {
    $('a.openwin').openwin({
    	option : {
    		width: 500,
    		height: 300,
       	}
    });
});

// 背景色の変更
$(function() {
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