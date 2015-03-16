<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
	<title>Score</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-Style-Type" content="text/css">
	<meta http-equiv="Content-Style-Type" content="text/javascript">
	<link rel="stylesheet" type="text/css" href="./css/common.css">
	<link rel="stylesheet" type="text/css" href="./css/note.css">
	<%
		// 文字化け対策
		request.setCharacterEncoding("utf8");
	
		/////  DB環境の構築 　/////
		
		// ドライバのロード
		Class.forName("com.mysql.jdbc.Driver");
		// コネクションの取得
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost/hew2014", "root", "");
		
		// ステートメントの作成
		Statement smt = null;
		smt = con.createStatement();
		
		// SQL文の作成と実行
		String sql = "SELECT NAME, SCORE, COMMENT FROM SCORE ORDER BY SCORE DESC";
		ResultSet rs = smt.executeQuery(sql);
		
		// 結果の取得と表示
		int n = 1;
		while(rs.next()){
	%>
	<div class="info">
		<div class="rank">
			<p><%= n %></p>
		</div>
		<div class="name">
			<p><%= rs.getString("NAME") %></p>
		</div>
		<div class="score">	
			<p><%= rs.getString("SCORE") %>点</p>
		</div>
		<div class="comment">
			<p><%= rs.getString("COMMENT") %></p>
		</div>
	</div>
	<%
		n++;
		}
		//while終点

		smt.close();
		con.close();
	%>
</head>
<body>
</body>
</html>