/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.41
 * Generated at: 2015-02-13 06:18:43 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.sql.*;

public final class questionnaire_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\r\n");
      out.write("\t<meta http-equiv=\"Content-Style-Type\" content=\"text/css\" />\r\n");
      out.write("\t<meta http-equiv=\"Content-Style-Type\" content=\"text/javascript\" />\r\n");
      out.write("\t<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/common.css\" />\r\n");
      out.write("\t<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/note.css\" />\r\n");
      out.write("<title>一人暮らし度チェック</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t");

		// 文字化け対策
		request.setCharacterEncoding("utf8");
	
		/////  DB環境の構築 　/////
		
		// ドライバのロード
		Class.forName("com.mysql.jdbc.Driver");
		// コネクションの取得
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost/db11", "root", "");
		
		// ステートメントの作成
		Statement smt = null;
		smt = con.createStatement();
		
		// SQL文の作成と実行
		String sql = "SELECT * FROM STUDENT_INFO";
		ResultSet rs = smt.executeQuery(sql);
		
		// 結果の取得と表示
		while(rs.next()){
	
      out.write("\r\n");
      out.write("\t<p>\r\n");
      out.write("\t\tID:");
      out.print( rs.getString("STUDENT_NO") );
      out.write("<br />\r\n");
      out.write("\t\tPW:");
      out.print( rs.getString("NAME") );
      out.write("<br />\r\n");
      out.write("\t</p>\r\n");
      out.write("\t");

		}
		smt.close();
		con.close();
	
      out.write("\r\n");
      out.write("\t<h1>一人暮らし度チェック</h1>\r\n");
      out.write("\t<form action=\"result.jsp\" method=\"post\">\r\n");
      out.write("\t\t<h2>料理は作る？</h2>\r\n");
      out.write("\t\t<p>\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q1\" value=\"0\" />毎日作る<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q1\" value=\"1\" />たまに作る<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q1\" value=\"2\" />ほとんど作らない<br />\r\n");
      out.write("\t\t</p>\r\n");
      out.write("\t\t<h2>掃除はどのくらいの頻度でする？</h2>\r\n");
      out.write("\t\t<p>\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q2\" value=\"0\" />ほぼ毎日<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q2\" value=\"1\" />たまにする<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q2\" value=\"2\" />ほとんどしない<br />\r\n");
      out.write("\t\t</p>\r\n");
      out.write("\t\t<h2>外がいい天気！</h2>\r\n");
      out.write("\t\t<p>\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q3\" value=\"0\" />洗濯しよう！<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q3\" value=\"1\" />おでかけ！<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q3\" value=\"2\" />ゲームでしょ。<br />\r\n");
      out.write("\t\t</p>\r\n");
      out.write("\t\t<h2>川崎市の燃えるゴミの日は？</h2>\r\n");
      out.write("\t\t<p>\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q4\" value=\"0\" />月・木<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q4\" value=\"1\" />火・金<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q4\" value=\"2\" />水・土<br />\r\n");
      out.write("\t\t</p>\r\n");
      out.write("\t\t<h2>一人暮らし、楽しい？</h2>\r\n");
      out.write("\t\t<p>\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q5\" value=\"0\" />楽しい！<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q5\" value=\"0\" />楽しそう！<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q5\" value=\"2\" />つらい<br />\r\n");
      out.write("\t\t\t<input type=\"radio\" name=\"q5\" value=\"2\" />つらそう<br />\r\n");
      out.write("\t\t</p>\r\n");
      out.write("\t\t<p>\r\n");
      out.write("\t\t\t<input type=\"submit\" value=\"診断！\" />\r\n");
      out.write("\t\t</p>\r\n");
      out.write("\t</form>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
