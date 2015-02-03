<!-- Thanks for  -->
<!-- 2014HEW Javaを使った楽しいWEBサイト　IT11A247 中山暁登 -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="Content-Style-Type" content="text/javascript" />
	<link rel="stylesheet" type="text/css" href="./css/common.css" />
	<script src="./js/jquery-2.1.3.min.js"></script>
	<script src="./js/jquery.openwin.js"></script>
	<script src="./js/jquery.color.js"></script>
	<script src="./js/common.js"></script>
	<title>FunRoom - 「一人暮らし」を「楽しく」。</title>
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<p id="men" class="colorChange">Men</p>
			<p id="women" class="colorChange">Women</p>
			<p id="default" class="colorChange">Default</p>
			<p id="indicator" class="indicator">スクロール値 | <span id="scrollValue">0</span></p>
		</div>
		<ul id="contents">
			<li id="outside" class="content">
				<a href="#kitchen" class="scrollNext">キッチンへ</a>
			</li>
			<li id="kitchen" class="content">
				<a href="#bathroom" class="scrollNext">風呂場へ</a><br /><br />
				<a href="./questionnaire.jsp" class="openwin">(^-^)v</a>
			</li>
			<li id="bathroom" class="content">
				<a href="#living" class="scrollNext">リビングへ</a>
			</li>
			<li id="living" class="content">
				<a href="#entrance" class="scrollNext">玄関へ</a>
			</li>
			<li id="entrance" class="content">
				<a href="#bye"  class="scrollNext">外へ</a>
			</li>
			<li id="bye" class="content">
				<a href="#header" class="scrollTop">ありがとう！</a>
			</li>
		</div>
		<div id="footer" class></div>
	</div>
</body>
</html>