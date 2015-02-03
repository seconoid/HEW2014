<!-- Thanks for  -->
<!-- 2014HEW Javaを使った楽しいWEBサイト　IT11A247 中山暁登 -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"　/>
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="Content-Style-Type" content="text/javascript" />
	<link rel="stylesheet" type="text/css" href="./css/common.css" />
	<script src="./js/jquery-2.1.3.min.js"></script>
	<script src="./js/jquery.openwin.js"></script>
	<script src="./js/jquery.color.js"></script>
	<script src="./js/common.js"></script>
	<title>FunRoom - 「一人」を「楽しく」。</title>
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<p id="men" class="colorChange">Men</p>
			<p id="women" class="colorChange">Women</p>
			<p id="default" class="colorChange">Default</p>
		</div>
		<div id="contents">
			<div id="outside" class="content">
				<a href="#kitchen" class="scrollNext">キッチンへ</a>
			</div>
			<div id="kitchen" class="content">
				<a href="#bathroom" class="scrollNext">風呂場へ</a><br /><br />
				<a href="./questionnaire.jsp" class="openwin">(^-^)v</a>
			</div>
			<div id="bathroom" class="content">
				<a href="#living" class="scrollNext">リビングへ</a>
			</div>
			<div id="living" class="content">
				<a href="#entrance" class="scrollNext">玄関へ</a>
			</div>
			<div id="entrance" class="content">
				<a href="#bye"  class="scrollNext">外へ</a>
			</div>
			<div id="bye" class="content">
				<a href="#header" class="scrollTop">ありがとう！</a>
			</div>
		</div>
	</div>
</body>
</html>