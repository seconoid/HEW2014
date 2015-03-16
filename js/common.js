// パララックススクロール
$(function() {
	var PosTop = 700;

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
	var pos = 700;
	var value = 0;
	var i = 1;
	var p = 0;

	$('.scrollNext').click(function () {
		value = $(window).scrollTop();
		if( value >= pos * 5 ){
			i = 0;
		}else if ( value >= pos * 4 ){
			i = 5;
		}else if ( value >= pos * 3 ){
			i = 4;
		}else if ( value >= pos * 2 ){
			i = 3;
		}else if ( value >= pos ){
			i = 2;
		}else{
			i = 1;
		}
		p = $('.content').eq(i).offset().top;
		$('html, body').animate({ scrollTop: p }, 1100, 'swing');
		return false;
	});

	// トップへスクロール
	$('.scrollTop').click(function () {
		$('html, body').animate({ scrollTop: 0}, 2000);
		setTimeout(function(){
			$('#scrollButton').fadeIn(700);
		},2000);
		return false;
	});
	
});

// 小ウィンドウを表示
$(document).ready(function() {
    $('a.openwin').openwin({
    	option : {
    		width: 500,
    		height: 500,
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

// ボタンのフェードイン・フェードアウト
$(function() {
	$('#scrollButton').click(function() {
		var pos = 700;
		var value = $(window).scrollTop();
    	$(this).fadeOut(600);
		if( value >= pos * 4){
			return;
		}
		setTimeout(function(){
			$('#scrollButton').fadeIn(1000);
		},600);
	});
})