<!-- Thanks for  -->
<!-- 2014HEW Javaを使った楽しいWEBサイト　IT11A247 中山暁登 -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-Style-Type" content="text/css">
	<meta http-equiv="Content-Style-Type" content="text/javascript">
	<link rel="stylesheet" type="text/css" href="./css/common.css">
	<link rel="stylesheet" type="text/css" href="./css/items.css">
	<script src="./js/jquery-2.1.3.min.js"></script>
	<script src="./js/jquery.openwin.js"></script>
	<script src="./js/jquery.color.js"></script>
	<script src="./js/common.js"></script>
	<script src="./js/itemAnimation.js"></script>
	<title>FunRoom - 「一人」を「楽しく」。</title>
</head>
<body onLoad="itemAnimeStart();">
	<div id="wrapper">

		<!-- header -->
		<div id="header">
			<p id="men" class="colorChange">Men</p>
			<p id="women" class="colorChange">Women</p>
			<p id="default" class="colorChange">Default</p>
		</div>
		<div id="contents">
			<!-- scrollButton -->
			<img src="./images/button.png" alt="scrollButton" width="80" height="80" id="scrollButton">


			<!--**** outside ****-->
			<div id="outside" class="content">
				<div class="items">

					<!-- item images -->
					<img src="./images/outside_01.png" alt="house" id="outside01">
					<img src="./images/outside_02.png" alt="cloud" id="outside02" class="cloud">
					<img src="./images/outside_02.png" alt="cloud" id="outside03" class="cloud">
					<img src="./images/outside_04.png" alt="door" id="outside04" class="cloud">

					<a href="#kitchen" class="scrollNext">キッチンへ</a>
				</div>
			</div>


			<!--**** kitchen ****-->
			<div id="kitchen" class="content">
				<div class="items">
					<!-- item images -->
					<img src="./images/kitchen_01.png" alt="sink" id="kitchen01">
					<img src="./images/kitchen_02.png" alt="fridge" id="kitchen02">
					<img src="./images/kitchen_03.png" alt="shelf" id="kitchen03">
					<img src="./images/kitchen_04.png" alt="conro" id="kitchen04">
					<img src="./images/kitchen_05.png" alt="fire" id="kitchen05">
					<a href="#kitchen">
						<img src="./images/kitchen_06.png" alt="fire" id="kitchen06_1">
					</a>
					<a href="#kitchen">
						<img src="./images/kitchen_06.png" alt="fire" id="kitchen06_2">
					</a>
					<img src="./images/kitchen_07.png" alt="air" id="kitchen07">
					<a href="#kitchen">
						<img src="./images/kitchen_08.png" alt="fire" id="kitchen08_1">
					</a>
					<a href="#kitchen">
						<img src="./images/kitchen_08.png" alt="fire" id="kitchen08_2">
					</a>
					<a href="#kitchen">
						<img src="./images/kitchen_08.png" alt="fire" id="kitchen08_3">
					</a>
					<img src="./images/kitchen_09.png" alt="fire" id="kitchen09">
					<img src="./images/kitchen_10.png" alt="fire" id="kitchen10">
					<img src="./images/kitchen_11.png" alt="fire" id="kitchen11">
					<img src="./images/kitchen_12.png" alt="fire" id="kitchen12">
					<img src="./images/kitchen_13.png" alt="fire" id="kitchen13">
					<img src="./images/kitchen_14.png" alt="fire" id="kitchen14">
					<img src="./images/kitchen_15.png" alt="fire" id="kitchen15">

					<!-- animation images -->
					<img src="./images/kitchen_anime01.png" alt="fireanime" id="kitchen_anime01">
					<img src="./images/kitchen_anime11.png" alt="fire" id="kitchen_anime11">
					<img src="./images/kitchen_anime12.png" alt="fire" id="kitchen_anime12">
					<img src="./images/kitchen_anime12.png" alt="fire" id="kitchen_anime13">
					<img src="./images/kitchen_anime21.png" alt="fire" id="kitchen_anime21">
					<img src="./images/kitchen_anime22.png" alt="fire" id="kitchen_anime22">
					<img src="./images/kitchen_anime23.png" alt="fire" id="kitchen_anime23">
					<img src="./images/kitchen_anime24.png" alt="fire" id="kitchen_anime24">
					<img src="./images/kitchen_anime31.png" alt="fire" id="kitchen_anime31">
					<img src="./images/kitchen_anime41.png" alt="fire" id="kitchen_anime41">
					<img src="./images/kitchen_anime42.png" alt="fire" id="kitchen_anime42">
					<img src="./images/kitchen_anime43.png" alt="fire" id="kitchen_anime43">
					<img src="./images/kitchen_anime44.png" alt="fire" id="kitchen_anime44">

					<!-- bottum shelf -->
					<img src="./images/kitchen_anime51.png" alt="fire" id="kitchen_anime51">
					<img src="./images/kitchen_anime52.png" alt="fire" id="kitchen_anime52">

					<!-- fridge -->
					<img src="./images/kitchen_anime61.png" alt="fire" id="kitchen_anime61">
					<img src="./images/kitchen_anime62.png" alt="fire" id="kitchen_anime62">
					<img src="./images/kitchen_anime63.png" alt="fire" id="kitchen_anime63">

					<!-- clickArea -->
					<img src="./images/kitchen_flagConro.png" alt="fire" id="conroFlag">
					<a href="#kitchen">
						<img src="./images/kitchen_flagJaguchi.png" alt="fire" id="jaguchiFlag">
					<img src="./images/kitchen_flagSponge.png" alt="fire" id="spongeFlag">
					<a href="#kitchen">
						<img src="./images/kitchen_flagWashing.png" alt="fire" id="washingFlag">
					</a>

					<!-- effect -->
					<img src="./images/effect01.png" alt="window" id="washed_effect" class="effect">

					<a href="#bathroom" class="scrollNext">風呂場へ</a><br /><br />
					<a href="./questionnaire.jsp" class="openwin">(^-^)v</a>
				</div>
			</div>


			<!---**** bathroom ****-->
			<div id="bathroom" class="content">
				<div class="items">

					<!-- item images -->
					<img src="./images/bathroom_01.png" alt="bath" id="bathroom01">
					<img src="./images/bathroom_02.png" alt="bath" id="bathroom02">
					<img src="./images/bathroom_03.png" alt="bath" id="bathroom03">
					<img src="./images/bathroom_04.png" alt="bath" id="bathroom04">
					<img src="./images/bathroom_05.png" alt="bath" id="bathroom05">
					<img src="./images/bathroom_06.png" alt="bath" id="bathroom06">
					<img src="./images/bathroom_07.png" alt="bath" id="bathroom07">
					<img src="./images/bathroom_08.png" alt="bath" id="bathroom08">
					<img src="./images/bathroom_09.png" alt="bath" id="bathroom09">
					
					<!-- animation images -->
					<img src="./images/bathroom_anime01.png" alt="bath" id="bathroom_anime01">
					<img src="./images/bathroom_anime02.png" alt="bath" id="bathroom_anime02">
					<img src="./images/bathroom_anime03.png" alt="bath" id="bathroom_anime03">
					<img src="./images/bathroom_anime04.png" alt="bath" id="bathroom_anime04">

					<!-- showerStop -->
					<a href="#bathroom" onClick="showerStop()">
						<img src="./images/bathroom_flagShower.png" alt="bath" id="showerFlag">
					</a>

					<a href="#living" class="scrollNext">リビングへ</a>
				</div>
			</div>


			<!--**** living ****-->
			<div id="living" class="content">
				<div class="items">

					<!-- item images -->
					<img src="./images/living_01.png" alt="bed" id="living01">
					<img src="./images/living_02.png" alt="window" id="living02">
					<img src="./images/living_03.png" alt="window" id="living03">
					<img src="./images/living_04.png" alt="window" id="living04">
					<img src="./images/living_05.png" alt="window" id="living05">
					<img src="./images/living_06.png" alt="window" id="living06">
					<img src="./images/living_07.png" alt="window" id="living07">

					<!-- animation images -->

					<!-- clothes -->
					<img src="./images/living_anime01.png" alt="window" id="living_anime01">
					<img src="./images/living_anime02.png" alt="window" id="living_anime02">
					<img src="./images/living_anime03.png" alt="window" id="living_anime03">
					<img src="./images/living_anime04.png" alt="window" id="living_anime04">

					<!-- getClothes -->
					<a href="#living" onClick="getClothes()">
						<img src="./images/living_flagClothes.png" alt="bath" id="clothesFlag">
					</a>


					<!-- books -->
					<img src="./images/living_anime11.png" alt="window" id="living_anime11">
					<img src="./images/living_anime12.png" alt="window" id="living_anime12">
					<img src="./images/living_anime13.png" alt="window" id="living_anime13">

					<!-- arrange books -->
					<a href="#living" onClick="arrangeBooks01()">
						<img src="./images/living_flagBooks.png" alt="bath" id="booksFlag">
					</a>

					<!-- effect -->
					<img src="./images/effect01.png" alt="window" id="books_effect" class="effect">

					<a href="#entrance"class="scrollNext">玄関へ</a>
				</div>
			</div>


			<!--**** entrance ****-->
			<div id="entrance" class="content">
				<div class="items">
					<!-- item images -->
					<a href="#bye"  class="scrollNext">外へ</a>
				</div>
			</div>

			<!-- last -->
			<div id="bye" class="content">
				<div class="items">
					<a href="#header" class="scrollTop">ありがとう！</a>
				</div>
			</div>

		</div>
	</div>
</body>
</html>