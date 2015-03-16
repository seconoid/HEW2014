// default flg

var sunFlg = 0;		//outside's sun
var conroFlg = 1; 	//kithcne's conro
var ventFlg = 0;   	//kitchen's kankisen
var washFlg = 0;   	//kitchen's suidou
var washingFlg = 0;	//kithcne's washing animation
var babbleFlg = 0;	//kithcne's babble
var effectFlg = 0;	//kirakira flag
var showerSwitch = 1;//bathroom's shower and column switch
var waterFlg = 1;	//bathroom's water on off
var showerFlg = 1; 	//bathroom's shower 
var columnFlg = 0;  //bathroom's column
var steamFlg = 0;	//bathroom's steam
var windowFlg = 0; 	//living's window
var leavesFlg = 0;	//entrance's leaves
var lightFlg = 0;	//entrance's light
var postFlg = 0;	//entrance's post
var letterFlg = 0;	//entrance's letter
var counter = 0;	//for dilay animation

// conro-syokki-kanki-fridge-shower-steam-book-sentaku
var score = 10;

// set animation
function itemAnimeStart(){
	effect();	// kirakira
	sunshine();	// outsides sunshine
	blow();		// kitchens kankisen
	conro();	// kitchens conro
	water();    // kitchens sink
	babble();	// kitchens babble
	shower();	// bathrooms shower
	column();	// bathrooms column
	steam();	// bathrooms steam
	windows();	// livings sentakumono
	leaves();	// entrances leaves
	light();	// entrances light

	if( counter > 4){
		text();		// outsides text
		syokki();	// kitchens shabon
		post();		// entrances post
		counter = 0;
	}
	counter++;
	setTimeout('itemAnimeStart()', 500);
}

////*** outisde ***////
function sunshine(){
	if( sunFlg == 0 ){
		$('#outside06').hide();
		$('#outside_anime01').show();
		sunFlg = 1;
	}else if( sunFlg == 1 ){
		$('#outside_anime01').hide();
		$('#outside_anime02').show();
		sunFlg = 2;
	}else if( sunFlg == 2 ){
		$('#outside_anime02').hide();
		$('#outside_anime03').show();
		sunFlg = 3;
	}else{
		$('#outside_anime03').hide();
		$('#outside06').show();
		sunFlg = 0;
	}
}

// enter
$(function(){
	$('#outside_anime12').hover(function(){
		$('#outside_04').hide();
		$('#outside_anime11').show();
		setTimeout(function(){
			$('#outside_anime12').css({opacity: 1});
			$('#outside_anime11').hide();
		},130);
	},
	function(){
		$('#outside_anime11').show();
		$('#outside_anime12').css({opacity: 0});
		setTimeout(function(){
			$('#outside_04').show();
			$('#outside_anime11').hide();
		},130);
	});
});

// door click
$(function(){
	$('#outside_anime12').click(function(){
		document.getElementById("achieveText").innerHTML="「おじゃまします」獲得！";
		achieve();
	});
});

// text anime
function text(){
	$('#outside07').css({transform: 'rotate(9deg'});
	setTimeout(function(){
		$('#outside07').css({transform: 'rotate(355deg'});		
	},800)
	setTimeout(function(){
		$('#outside07').css({transform: 'rotate(5deg'});		
	},900)
	setTimeout(function(){
		$('#outside07').css({transform: 'rotate(355deg'});		
	},1000)
	setTimeout(function(){
		$('#outside07').css({transform: 'rotate(5deg'});		
	},1100)
	setTimeout(function(){
		$('#outside07').css({transform: 'rotate(0deg'});		
	},1200)
}

// twitter
$(function(){
	$('#outside_anime23').hover(function(){
		$('#outside_anime21').hide();
		$('#outside_anime22').show();		
		setTimeout(function(){
			$('#outside_anime22').hide();
			$('#outside_anime23').css({opacity: 1});
		},120);
	},
	function(){
		$('#outside_anime23').css({opacity: 0});
		$('#outside_anime22').show();		
		setTimeout(function(){
			$('#outside_anime22').hide();
			$('#outside_anime21').show();
		},120);
	});
});

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

$(function() {
	$('#kitchen_anime53').hover(function(){
		$('#kitchen_anime54').css({opacity: '1'});
		setTimeout(function(){
			$('#kitchen_anime53').css({opacity: '1'});
		}, 100);
	},
	function(){
		$('#kitchen_anime53').css({opacity: '0'});
		setTimeout(function(){
			$('#kitchen_anime54').css({opacity: '0'});
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
			// on -> off
			conroFlg = 2;
			$(this).css({transform: 'rotate(60deg)'});
			$('#conroFlag').show();
			score -= 15;
		}else{
			//of -> on
			conroFlg = 0;
			$(this).css({transform: 'rotate(0deg)'});
			$('#conroFlag').hide();
			document.getElementById("achieveText").innerHTML="「炎上回避」獲得！";
			achieve();
			score += 15;
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
		score -= 5;
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
		document.getElementById("achieveText").innerHTML="「11/9は換気の日」獲得！";
		achieve();
		score += 5;
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
	$('#kitchen_anime63').hover(
		function(){
			$(this).css({transform: 'rotate(9deg)'});
			setTimeout(function(){
				$('#kitchen_anime63').css({transform: 'rotate(354deg)'});
			},120);
			setTimeout(function(){
				$('#kitchen_anime63').css({transform: 'rotate(5deg)'});
			},240);
			setTimeout(function(){
				$('#kitchen_anime63').css({transform: 'rotate(0deg)'});
			},360);
		},
		function(){
			$(this).css({transform: 'rotate(0deg)'});
		}
	);
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

//fridge opne and close
$(function(){
	// open
	$('#kitchen02').click(function(){
		score -= 10;
		$('#kitchen02').hide();
		$('#kitchen_anime61').show();
		setTimeout(function(){
			$('#kitchen_anime61').hide();
			$('#kitchen_anime62').show();
		}, 120);
		setTimeout(function(){
			$('#kitchen_anime62').hide();
			$('#kitchen_anime63').show();
		}, 240);
	});

	//close
	$('#kitchen_anime63').click(function(){
		score += 10;
		document.getElementById("achieveText").innerHTML="「開けたら閉める」獲得！";
		achieve();
		$('#kitchen_anime63').hide();
		$('#kitchen_anime62').show();
		setTimeout(function(){
			$('#kitchen_anime62').hide();
			$('#kitchen_anime61').show();
		}, 120);
		setTimeout(function(){
			$('#kitchen_anime61').hide();
			$('#kitchen02').show();
		}, 240);
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
		return;
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

//babble animation
function babble(){
	if( babbleFlg == 0){
		return;
	}else if( babbleFlg == 1){
		$('#kitchen_anime41').css({transform: 'scale(1.5) rotateY(0deg)'});
		babbleFlg = 2;
	}else{
		$('#kitchen_anime41').css({transform: 'scale(1.5) rotateY(180deg)'});
		babbleFlg = 1;
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
		}, 230);
		setTimeout(function(){
			$('#kitchen11').css({transform: 'scaleY(0.7)'});
			$('#kitchen11').css({bottom: '344px'});
		}, 380);
		setTimeout(function(){
			$('#kitchen11').css({transform: 'scaleY(1.0)'});
			$('#kitchen11').css({bottom: '351px'});
		}, 530);
	},
	function(){
		$('#kitchen11').css({transform: 'scaleY(1.0)'});
		$('#kitchen11').css({bottom: '351px'});
	});
});

// syokki
function syokki(){
	if( washingFlg == 1){
		return;
	}

	$('#kitchen13').css({transform: 'scale(1.15)'});
	setTimeout(function(){
		$('#kitchen13').css({transform: 'scale(1.0)'});
	},160);
	setTimeout(function(){
		$('#kitchen13').css({transform: 'scale(1.15)'});
	},320);
	setTimeout(function(){
		$('#kitchen13').css({transform: 'scale(1.0)'});
	},480);
}

// shocki fover
$(function(){
	$('#washingFlag').hover(function(){
		$('#kitchen13').css({transform: 'scaleY(0.5)'});
		$('#kitchen13').css({bottom: '328px'});
		setTimeout(function(){
			$('#kitchen13').css({transform: 'scaleY(1.0)'});
			$('#kitchen13').css({bottom: '385px'});
		}, 230);
		setTimeout(function(){
			$('#kitchen13').css({transform: 'scaleY(0.7)'});
			$('#kitchen13').css({bottom: '328px'});
		}, 380);
		setTimeout(function(){
			$('#kitchen13').css({transform: 'scaleY(1.0)'});
			$('#kitchen13').css({bottom: '338px'});
		}, 530);
	});
});


// lets washing!!!
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
			document.getElementById("achieveText").innerHTML="「洗い場担当」獲得！";
			achieve();
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
			$('#kitchen_anime41').css({transform: 'scale(1.5) rotateY(0deg)'});
			$('#kitchen_anime42').hide();
			$('#kitchen_anime43').show();
		}, 5000);
		setTimeout(function(){
			$('#kitchen_anime41').css({transform: 'scale(1.5) rotateY(180deg)'});
			$('#kitchen_anime43').hide();
			$('#kitchen_anime44').show();
		}, 5600);
		setTimeout(function(){
			babbleFlg = 1;
			$('#kitchen11').show();

			effectFlg = 1;
			washFlg = 0;
			score += 20;
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

// column
function column(){
	if( columnFlg == 0 ){
		$('#bathroom_anime11').hide();
		$('#bathroom_anime12').hide();
		return
	}
	if( columnFlg == 1){
		$('#bathroom_anime12').css({transform: 'rotateY(0deg)'});
		columnFlg = 2;
	}else{
		$('#bathroom_anime12').css({transform: 'rotateY(180deg'});
		columnFlg = 1;
	}
}

//steam
function steam(){
	if( steamFlg == 0 ){
		return;
	}
	if( steamFlg == 1 ){
		$('#bathroom_anime21').css({transform: 'scale(0.8) rotateY(180deg)'});
		steamFlg = 2;
	}else{
		$('#bathroom_anime21').css({transform: 'scale(0.8) rotateY(0deg)'});
		steamFlg = 1;
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
		score -= 10;
	// on -> off 
	}else{
		showerFlg = 3;
		score += 10;
		document.getElementById("achieveText").innerHTML="「節水上手」獲得！";
		achieve();
	}
}

// switch shower column
$(function(){
	$('#bathroom06').click(function(){
		$(this).css({transform: 'rotate(0deg)'})
		if( showerSwitch == 1){

			// shower -> coulmn
			$('#bathroom_anime11').show();
			setTimeout(function(){
				$('#bathroom06').css({transform: 'rotate(-90deg)'})
			},280);
			setTimeout(function(){
				$('#bathroom_anime11').css({transform: 'scale(1.0)'});
				$('#bathroom_anime12').show();
				$('#bathroom_anime21').show();
			},500);
			setTimeout(function(){
					steamFlg = 1;
			},1000);
			showerSwitch = 2;
			showerFlg = 3;
			columnFlg = 1;
			score += 10;
			document.getElementById("achieveText").innerHTML="「源泉」獲得！";
			achieve();
		}else{

			//coulmn -> shower
			$('#bathroom_anime03').show();
				$('#bathroom_anime11').css({transform: 'scaleX(0.6)'})
			setTimeout(function(){
				$('#bathroom06').css({transform: 'rotate(90deg)'})
				showerSwitch = 1;
				showerFlg = 1;
				columnFlg = 0;
			},280);
		}
	});
});

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
		$('#living_anime02').show();
		windowFlg = 2;
	}else if( windowFlg == 2 ){
		$('#living_anime02').hide();
		$('#living02').show();
		windowFlg = 3;
	}else if( windowFlg == 3 ){
		$('#living02').hide();
		$('#living_anime01').show();		
		windowFlg = 4;
	}else if( windowFlg == 4 ){
		$('#living_anime01').hide();
		$('#living02').show();
		windowFlg = 1;
	}else{
		return;
	}
}

// on clothes
$(function(){
	$('#living_anime05').hover(function(){
		$(this).css({transform: 'scale(0.85)'})
		setTimeout(function(){
			$('#living_anime05').css({transform: 'scale(1.0'});
		},140);
		setTimeout(function(){
			$('#living_anime05').css({transform: 'scale(0.85'});
		},280);
		setTimeout(function(){
			$('#living_anime05').css({transform: 'scale(1.0'});
		},420);
	},
	function(){
		$(this).css({transform: 'scale(1.0'});		
	});
});

// sentaku clothes
function getClothes(){
	$('#living_anime05').hide();
	setTimeout('getClothe01()', 500);
}

function getClothe01(){
	$('#living_anime04').hide();
	$('#living_anime03').show();
	setTimeout('getClothe02()', 500);
}

function getClothe02(){
	$('#living_anime03').hide();
	$('#living02').show();
	windowFlg = 1;
	score += 20;
	document.getElementById("achieveText").innerHTML="「明日ハレの日」獲得！";
	achieve();
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
	score += 10;
	document.getElementById("achieveText").innerHTML="「六法全書」獲得！";
	achieve();
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

$(function(){
	$('#living08').hover(function(){
		$(this).css({transform: 'rotate(352deg)'});
		setTimeout(function(){
			$('#living08').css({transform: 'rotate(8deg)'});
		},100);
		setTimeout(function(){
			$('#living08').css({transform: 'rotate(354deg)'});
		},200);
		setTimeout(function(){
			$('#living08').css({transform: 'rotate(0deg)'});
		},300);
	},
	function(){
		$('#living08').css({transform: 'rotate(0deg)'});
	});
});

////**** entrance ****////
//leaves move
function leaves(){
	if( leavesFlg == 0 ){
		$('#entrance_anime01').css({transform: 'rotate(358deg)'});
		leavesFlg = 1;
	} else {
		$('#entrance_anime01').css({transform: 'rotate(0deg)'});
		leavesFlg = 0;
	}
}

//boots hover
$(function(){
	$('#entrance_anime12').hover(function(){
		$('#entrance_anime11').show();
		setTimeout(function(){
			$('#entrance_anime12').css({opacity: '1'});
		},120);
	},
	function(){
		$('#entrance_anime12').css({opacity: '0'});
		setTimeout(function(){
			$('#entrance_anime11').hide();
		},120);
	});
});

//light anime
function light(){
	if( lightFlg == 0 ){
		$('#entrance_anime21').show();
		$('#entrance_anime22').hide();
		lightFlg = 1;
	}else{
		$('#entrance_anime21').hide();
		$('#entrance_anime22').show();
		lightFlg = 0;
	}
}

//post effect
function post(){
	$('#entrance_anime31').css({transform: 'rotate(355deg)'});
	setTimeout(function(){
		$('#entrance_anime31').css({transform: 'rotate(7deg)'});		
	},130);
	setTimeout(function(){
		$('#entrance_anime31').css({transform: 'rotate(357deg)'});		
	},260);
	setTimeout(function(){
		$('#entrance_anime31').css({transform: 'rotate(0deg)'});		
	},380);
}

//post click
$(function(){
	$('#entrance_anime33').click(function(){
		if( postFlg == 0 ){
			$('#entrance_anime31').hide();
			$('#entrance_anime32').show();
			setTimeout(function(){
				$('#entrance_anim32').hide();
				$('#entrance_anime33').css({opacity: '1'});
				if( letterFlg == 0){
					$('#entrance07').show();
				}
			},120);
			postFlg = 1;
		}else{
			$('#entrance_anime33').css({opacity: '0'});
			$('#entrance_anim32').hide();
			$('#entrance07').hide();
			setTimeout(function(){
				$('#entrance_anime32').hide();
				$('#entrance_anime31').show();
			},120);
			postFlg = 0;
		}
	});
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

// score update
function scoreUpdate(){
	$('#letter').attr('href', './result.jsp?score=' + score);
}

// display achieve
function achieve(){
	$('#achieve').fadeIn(800);
	setTimeout(function(){
		$('#achieve').fadeOut(1000);
	},2000);
}

// restartHover
$(function(){
	$('#bye_restart').hover(function(){
		$('#bye_restart').css({transform: 'rotate(355deg)'});
		setTimeout(function(){
			$('#bye_restart').css({transform: 'rotate(5deg)'});
		},120);
		setTimeout(function(){
			$('#bye_restart').css({transform: 'rotate(355deg)'});
		},240);
		setTimeout(function(){
			$('#bye_restart').css({transform: 'rotate(0deg)'});
		},360);
	},
	function(){
		return;
	});
});