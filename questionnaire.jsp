<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="Content-Style-Type" content="text/javascript" />
	<link rel="stylesheet" type="text/css" href="./css/common.css" />
	<link rel="stylesheet" type="text/css" href="./css/note.css" />
<title>一人暮らし度チェック</title>
</head>
<body>
	<h1>一人暮らし度チェック</h1>
	<form action="result.jsp" method="post">
		<h2>料理は作る？</h2>
		<p>
			<input type="radio" name="q1" value="0" />毎日作る<br />
			<input type="radio" name="q1" value="1" />たまに作る<br />
			<input type="radio" name="q1" value="2" />ほとんど作らない<br />
		</p>
		<h2>掃除はどのくらいの頻度でする？</h2>
		<p>
			<input type="radio" name="q2" value="0" />ほぼ毎日<br />
			<input type="radio" name="q2" value="1" />たまにする<br />
			<input type="radio" name="q2" value="2" />ほとんどしない<br />
		</p>
		<h2>外がいい天気！</h2>
		<p>
			<input type="radio" name="q3" value="0" />洗濯しよう！<br />
			<input type="radio" name="q3" value="1" />おでかけ！<br />
			<input type="radio" name="q3" value="2" />ゲームでしょ。<br />
		</p>
		<h2>川崎市の燃えるゴミの日は？</h2>
		<p>
			<input type="radio" name="q4" value="0" />月・木<br />
			<input type="radio" name="q4" value="1" />火・金<br />
			<input type="radio" name="q4" value="2" />水・土<br />
		</p>
		<h2>一人暮らし、楽しい？</h2>
		<p>
			<input type="radio" name="q5" value="0" />楽しい！<br />
			<input type="radio" name="q5" value="0" />楽しそう！<br />
			<input type="radio" name="q5" value="2" />つらい<br />
			<input type="radio" name="q5" value="2" />つらそう<br />
		</p>
		<p>
			<input type="submit" value="診断！" />
		</p>
	</form>
</body>
</html>