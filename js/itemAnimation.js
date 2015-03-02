// default flg
var showerFlg = 1;
var windowFlg = 1;
var conroFlg = 1;
var ventFlg = 0;
var washFlg = 0;
var washingFlg = 0;
var effectFlg = 0;

// set animation
function itemAnimeStart(){
	effect();
	blow();
	windows();
	shower();
	conro();
	water();
	setTimeout('itemAnimeStart()', 500);
}


////*** kitchen ***////

//shelf opne
$(function() {
	$('#kitchen_anime52').hover(function(){
		$('#kitchen_anime51').css({opacity: '1'});
		setTimeout(function(){
			$('#kitchen_anime52').css({opacity: '1'});
		}, 100);
	},
	function(){
		$('#kitchen_anime52').css({opacity: '0'});
		setTimeout(function(){
			$('#kitchen_anime51').css({opacity: '0'});
		}, 100);
	});
});

// conro
function conro(){
	if( conroFlg == 1 ){
		$('#kitchen05').hide();
		$('#kitchen_anime01').show();
		conroFlg = 2;
	}else if( conroFlg == 2){
		$('#kitchen_anime01').hide();
		$('#kitchen05').show();
		conroFlg = 1;
	}else{
		$('#kitchen05').hide();
		$('#kitchen_anime01').hide();
	}
}

// conro click
$(function(){
	$('#kitchen06_2').click(function (){
		if( conroFlg == 0){
			conroFlg = 2;
			$(this).css({transform: 'rotate(60deg)'});
			$('#conroFlag').show();
		}else{
			conroFlg = 0;
			$(this).css({transform: 'rotate(0deg)'});
			$('#conroFlag').hide();
		}
	});
});

// conro hover
$(function(){
	$('#conroFlag').hover(
		function(){
			$('#kitchen04').hide();
			$('#kitchen05').hide();
			$('#kitchen_anime01').hide();
			$('#kitchen06_1').hide();
			$('#kitchen06_2').hide();
			$('#kitchen09').css({transform: 'scaleY(0.7)'});
			$('#kitchen09').css({bottom: '283px'});
			$('#kitchen09').show();
			conroFlg = 0;
			setTimeout(function(){
				$('#kitchen09').css({transform: 'rotate(350deg)'});
				$('#kitchen09').css({bottom: '329px'});
			}, 150);
			setTimeout(function(){
				$('#kitchen09').css({transform: 'scaleY(0.7)'});
				$('#kitchen09').css({bottom: '283px'});
			}, 300);
			setTimeout(function(){
				$('#kitchen09').hide();
				$('#kitchen04').show();
				$('#kitchen05').show();
				$('#kitchen_anime01').show();
				$('#kitchen06_1').show();
				$('#kitchen06_2').show();
				conroFlg = 1;
			}, 430);
		},
		function(){
		}
	);
});

// ventilating fan
$(function(){
	$('#kitchen08_1').click(function(){
		$(this).hide();
		$('#kitchen08_2').show();
		$('#kitchen08_3').show();
		ventFlg = 0;
	});
	$('#kitchen08_2').click(function(){
		$(this).hide();
		$('#kitchen08_1').show();
		$('#kitchen08_3').show();
		ventFlg = 1;
	});
	$('#kitchen08_3').click(function(){
		$(this).hide();
		$('#kitchen08_1').show();
		$('#kitchen08_2').show();
		ventFlg = 3;
	});
});

// ventilating
function blow(){
	if( ventFlg == 0 ){
		$('#kitchen_anime21').hide();
		$('#kitchen_anime22').hide();
		$('#kitchen_anime23').hide();
		$('#kitchen_anime24').hide();
	}else if( ventFlg == 1 ){
		$('#kitchen_anime22').hide();
		$('#kitchen_anime23').hide();
		$('#kitchen_anime24').hide();
		$('#kitchen_anime21').show();
		ventFlg = 2;
	}else if( ventFlg == 2 ){
		$('#kitchen_anime21').hide();
		$('#kitchen_anime22').show();
		ventFlg = 1;
	}else if( ventFlg == 3 ){
		$('#kitchen_anime21').hide();
		$('#kitchen_anime22').hide();
		$('#kitchen_anime24').hide();
		$('#kitchen_anime23').show();
		ventFlg = 4;
	}else if( ventFlg == 4 ){
		$('#kitchen_anime24').show();
		$('#kitchen_anime23').hide();
		ventFlg = 3;
	}else{
		$('#kitchen_anime21').hide();
		$('#kitchen_anime22').hide();
		$('#kitchen_anime23').hide();
		$('#kitchen_anime24').hide();
	}
}

//fridge
$(function(){
	$('#kitchen02').hover(
		function(){
			$(this).css({transform: 'rotate(9deg)'});
			setTimeout(function(){
				$('#kitchen02').css({transform: 'rotate(354deg)'});
			},120);
			setTimeout(function(){
				$('#kitchen02').css({transform: 'rotate(5deg)'});
			},240);
			setTimeout(function(){
				$('#kitchen02').css({transform: 'rotate(0deg)'});
			},360);
		},
		function(){
			$(this).css({transform: 'rotate(0deg)'});
		}
	);
});

//fridge opne
$(function(){
	$('#kitchen02').click(function(){
		$('#kitchen02').hide();
		$('#kitchen_anime61').show();
	});
});

//jaguchiHover
$(function(){
	$('#jaguchiFlag').hover(function(){ 
		if( washFlg == 1 ){
			return;
		}
		$('#kitchen10').css({transform: 'rotate(350deg) scale(0.8)'});
		$('#kitchen10').css({bottom: '355px', left: '500px'});
		setTimeout(function(){
			$('#kitchen10').css({transform: 'rotate(8deg) scale(1.1)'});
			$('#kitchen10').css({bottom: '365px', left: '518px'});
		}, 170);
		setTimeout(function(){
			$('#kitchen10').css({transform: 'rotate(0deg) scale(1.0)'});
			$('#kitchen10').css({bottom: '352px', left: '510px'});
		}, 340);
	},
	function(){
		$('#kitchen10').css({transform: 'rotate(0deg) scale(1.0)'});
		$('#kitchen10').css({bottom: '352px', left: '510px'});
	});
});

//jaguchiClick
$(function(){
	$('#jaguchiFlag').click(function(){

		// off -> on
		if( washFlg == 0 ){
			washFlg = 1;

		// on -> off
		}else{
			$('#kitchen_anime31').hide();			
			washFlg = 0;
		}
	});
});

//water
function water(){
	if( washFlg == 0 ){
		return
	}else{
		$('#kitchen_anime31').show();
		if( washFlg == 1 ){
			$('#kitchen_anime31').css({transform: 'rotateY(180deg)'});
			washFlg = 2;	
		}else{
			$('#kitchen_anime31').css({transform: 'rotateY(0deg)'});
			washFlg = 1;
		}
	}
}

//sponge hopping
$(function(){
	$('#spongeFlag').hover(function(){
		$('#kitchen11').css({transform: 'scaleY(0.5)'});
		$('#kitchen11').css({bottom: '336px'});
		setTimeout(function(){
			$('#kitchen11').css({transform: 'scaleY(1.0)'});
			$('#kitchen11').css({bottom: '385px'});
		}, 350);
		setTimeout(function(){
			$('#kitchen11').css({transform: 'scaleY(0.8)'});
			$('#kitchen11').css({bottom: '344px'});
		}, 550);
		setTimeout(function(){
			$('#kitchen11').css({transform: 'scaleY(1.0)'});
			$('#kitchen11').css({bottom: '351px'});
		}, 750);
	},
	function(){
		$('#kitchen11').css({transform: 'scaleY(1.0)'});
		$('#kitchen11').css({bottom: '351px'});
	});
});

// syokki click
$(function(){
	$('#washingFlag').click(function(){
		setTimeout(function(){
			$('#kitchen11').hide();
			washFlg = 1
			water();
		}, 400);
		setTimeout(function(){
			$('#kitchen13').hide();
		}, 800);
		setTimeout(function(){
			$('#kitchen_anime41').css({transform: 'scale(0.5)'});
			$('#kitchen_anime41').show();
		}, 1400);
		setTimeout(function(){
			$('#kitchen_anime41').css({transform: 'scale(0.8) rotateY(180deg)'});
		}, 2000);
		setTimeout(function(){
			$('#kitchen_anime41').css({transform: 'scale(1.2) rotateY(0deg)'});
		}, 2600);
		setTimeout(function(){
			$('#kitchen_anime41').css({transform: 'scale(1.5) rotateY(180deg)'});
		}, 3200);
		setTimeout(function(){
			$('#kitchen_anime41').css({transform: 'scale(1.6) rotateY(0deg)'});
		}, 3800);
		setTimeout(function(){
			$('#kitchen_anime41').css({transform: 'scale(1.5) rotateY(180deg)'});
			$('#kitchen12').hide();
			$('#kitchen_anime42').show();
		}, 4400);
		setTimeout(function(){
			$('#kitchen_anime41').css({transform: 'scale(1.3) rotateY(0deg)'});
			$('#kitchen_anime42').hide();
			$('#kitchen_anime43').show();
		}, 5000);
		setTimeout(function(){
			$('#kitchen_anime41').css({transform: 'scale(0.9) rotateY(180deg)'});
			$('#kitchen_anime43').hide();
			$('#kitchen_anime44').show();
		}, 5600);
		setTimeout(function(){
			$('#kitchen_anime41').hide();
			$('#kitchen11').show();

			effectFlg = 1;
			$('#washed_effect').show();
		}, 6500);
	});
});

////*** bathroom ***////

// shower
function shower(){
	if( showerFlg == 1 ){
		$('#bathroom_anime03').hide();
		$('#bathroom_anime01').hide();
		$('#bathroom_anime02').show();
		showerFlg = 2;
	}else if( showerFlg == 2 ){
		$('#bathroom_anime02').hide();
		$('#bathroom_anime01').show();
		showerFlg = 1;
	}else if( showerFlg == 3 ){
		$('#bathroom_anime01').hide();
		$('#bathroom_anime02').hide();
		$('#bathroom_anime03').show();
		showerFlg = 4;
	}else if( showerFlg == 4 ){
		$('#bathroom_anime03').hide();
		$('#bathroom_anime04').show();
		showerFlg = 5;
	}else if( showerFlg == 5 ){
		$('#bathroom_anime04').hide();
		showerFlg = 0;
	}else{
		$('#shower_effect').show();
		return;
	}
}

// stop shower
function showerStop(){
	// off -> on
	if ( showerFlg == 0 ){
		$('#shower_effect').hide;
		$('#bathroom_anime03').show();
		showerFlg = 1;
		$('#shower_effect').hide();
	// on -> off 
	}else{
		showerFlg = 3;
	}
}

// faucet hover
$(function(){
	$('#showerFlag').hover(
		function(){
			$('#bathroom05').css({transform: 'rotate(15deg)'});
			setTimeout(function(){
				$('#bathroom05').css({transform: 'rotate(352deg)'});
			},100);
			setTimeout(function(){
				$('#bathroom05').css({transform: 'rotate(7deg)'});
			},200);
			setTimeout(function(){
				$('#bathroom05').css({transform: 'rotate(0deg)'});
			},300);
		},
		function(){
			$('#bathroom05').css({transform: 'rotate(0deg)'});
		}
	);
});


////*** living ***////

// clothes animation
function windows(){
	if( windowFlg == 1 ){
		$('#living02').hide();
		$('#living_anime01').show();		
		windowFlg = 2;
	}else if( windowFlg == 2 ){
		$('#living_anime01').hide();
		$('#living02').show();
		windowFlg = 3;
	}else if( windowFlg == 3 ){
		$('#living02').hide();
		$('#living_anime02').show();
		windowFlg = 4;
	}else if( windowFlg == 4 ){
		$('#living_anime02').hide();
		$('#living02').show();
		windowFlg = 1;
	}else{
		return;
	}
}

// get clothes
function getClothes(){
	if ( windowFlg == 0 ){
		return;
	}
	$('#living_anime01').hide();
	$('#living_anime02').hide();
	$('#living02').show();
	windowFlg = 0;
	setTimeout('getClothe01()', 500);
}

function getClothe01(){
	$('#living02').hide();
	$('#living_anime03').show();
	setTimeout('getClothe02()', 500);
}

function getClothe02(){
	$('#living_anime03').hide();
	$('#living_anime04').show();
	$('#clothesFlag').hide();
	return;
}

// arrange books
function arrangeBooks01(){
	$('#living07').hide();
	$('#living_anime11').show();
	setTimeout('arrangeBooks02()', 500);
}

function arrangeBooks02(){
	$('#living_anime11').hide();
	$('#living_anime12').show();
	setTimeout('arrangeBooks03()', 500);
}

function arrangeBooks03(){
	$('#living_anime12').hide();
	$('#living_anime13').show();
	$('#booksFlag').hide();
	setTimeout('booksDone()', 500);
}

function booksDone(){
	$('#books_effect').show();
	effectFlg = 1;
	return;
}


//hoverBooks
$(function(){
	var t = 0;
	var cnt = 0;
	$('#booksFlag').hover(

		//shake
		function(){
			t = 200;
			cnt = 2;
			for( i = 0; i < cnt; i++ ){
				setTimeout(function(){
					$('#living07').css({transform: 'rotate(354deg)'});
				},t * i);
				setTimeout(function(){
					$('#living07').css({transform: 'rotate(3deg)'});
				},t * i + (t / 2));
			}
			setTimeout(function(){
				$('#living07').css({transform: 'rotate(0deg)'});
			},(t * cnt));
		},
		function(){
			$('#living07').css({transform: 'rotate(0deg)'});
		}
	);
});


// doneEffect
function effect(){
	if( effectFlg == 0 ){
		return;
	}else{
		if( effectFlg == 1 ){
			$('.effect').css({transform: 'rotateY(180deg)'});
			effectFlg = 2;
		}else{
			$('.effect').css({transform: 'rotateY(0deg)'});
			effectFlg = 1;
		}
	}
}