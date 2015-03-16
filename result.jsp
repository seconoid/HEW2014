<%@ page language="java" 
	contentType="text/html; charset=UTF-8" 
	pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Style-Type" content="text/css">
<link rel="stylesheet" type="text/css" href="./css/common.css">
<link rel="stylesheet" type="text/css" href="./css/result.css">
<title>一人暮らし度チェック</title>
<%
	request.setCharacterEncoding("utf-8");
%>
</head>
<body>
<%
	String text;
	String text2;
	String post = request.getParameter("score");

	int score = Integer.parseInt(post);

	if ( score < 40 ){
		text = "家事をさぼってはいませんか？";
		text2 = "掃除や洗濯はしっかりやりましょう！";
	}else if( score < 70 ){
		text = "なかなかの一人暮らしっぷりですね！";
		text2= "電気や水道などの節約をしてみてはいかがでしょうか？";
	}else{
		text = "完璧な一人暮らしっぷりですね！";
		text2 = "これならずっと一人でも生きて行けるでしょう！";
	}
%>
	<div id="result">
		<img src="./images/result.png" alt="result">
	</div>
	<p>あなたの一人暮らし度は・・・</p>
	<p id="check"><span><%= score %>点</span>でした。</p>
	<p><%= text %></p>
	<p><%= text2 %></p>
	<form action="submit.jsp" method="post">
		<p id="name">名前<br>
			<input type="text" name="name">
		</p>
		<p>コメント<br>
			<textarea  id="comment" name="comment"></textarea>
		</p>

		<!-- 隠しフィールド -->
		<p id="score">得点
			<input type="text" name="score" value=<%=score%>>
		</p>

		<input id="submit" type="submit" value="送信！">
	</form>
</body>
</html>