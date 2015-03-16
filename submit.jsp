<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>送信完了</title>
<%
	request.setCharacterEncoding("UTF-8");
	String d1 = request.getParameter("name");
	String d2 = request.getParameter("score");
	String d3 = request.getParameter("comment");

	//コネクションオブジェクトを宣言
	Connection conn = null;
	//プリペアードステートメントオブジェクトを宣言
	PreparedStatement pstate = null;


	//入力値取得
	String name = d1;
	int score = Integer.parseInt(d2);
	String comment = d3;

	// 入力値	
	try {
		// ドライバのロード
		Class.forName("com.mysql.jdbc.Driver");

		// コネクション取得
		conn = DriverManager.getConnection("jdbc:mysql://localhost/hew2014", "root", "");

		
		
		// クエリ実行
		String sql = "insert into score (name, score, comment) values(?, ?, ?)";

		// ステートメント取得
		pstate = conn.prepareStatement(sql);

		//prepareStatement SQLに代入
		pstate.setString(1, name);
		pstate.setInt(2, score);
		pstate.setString(3, comment);

		int result = pstate.executeUpdate();
		
		if (result == 1){
			out.println("ok");
		}else{
			out.println("ng");
		}

	}catch (SQLException e){
	  out.println("SQLException:" + e.getMessage());
	}

pstate.close();
conn.close();

%>
</head>
<body>

</body>
</html>