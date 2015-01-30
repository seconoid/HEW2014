<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%
	request.setCharacterEncoding("utf-8");
%>
</head>
<body>
<%!
// アンケート結果を加算する
public int sum(int i){
	if ( i == 0 ){
		return 10;
	}else if ( i == 1){
		return 8;
	}else{
		return 5;
	}
}

%>
<%
	String post1 = request.getParameter("q1");
	String post2 = request.getParameter("q2");
	String post3 = request.getParameter("q3");
	String post4 = request.getParameter("q4");
	String post5 = request.getParameter("q5");
	int a1 = Integer.parseInt(post1);
	int a2 = Integer.parseInt(post2);
	int a3 = Integer.parseInt(post3);
	int a4 = Integer.parseInt(post4);
	int a5 = Integer.parseInt(post5);
	
	int score = 0;
	score += sum(a1);
	score += sum(a2);
	score += sum(a3);
	score += sum(a4);
	score += sum(a5);
%>
	<p>回答ありがとうございます！</p>
	<p>あなたの一人暮らし度は・・・</p>
	<h2><%= score %>点です！</h2>
</body>
</html>