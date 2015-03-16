<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>一人暮らし度ランキング</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-Style-Type" content="text/css">
	<meta http-equiv="Content-Style-Type" content="text/javascript">
	<link rel="stylesheet" type="text/css" href="./css/common.css">
	<link rel="stylesheet" type="text/css" href="./css/note.css">
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<a href="./index.jsp">
				<img src="./images/logo2.png" alt="logo" height="50">
			</a>
		</div>
		<div id="contents">
			<h2>
				<img src="./images/ranking.png" alt="ranking">
			</h2>
			<div id="ranking">
				<jsp:include page="./score.jsp" />
			</div>
		</div>
	</div>
</body>
</html>