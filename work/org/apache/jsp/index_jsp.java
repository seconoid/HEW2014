/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.41
 * Generated at: 2015-02-13 11:10:57 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.sql.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("<!-- Thanks for  -->\r\n");
      out.write("<!-- 2014HEW Javaを使った楽しいWEBサイト　IT11A247 中山暁登 -->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"　/>\r\n");
      out.write("\t<meta http-equiv=\"Content-Style-Type\" content=\"text/css\" />\r\n");
      out.write("\t<meta http-equiv=\"Content-Style-Type\" content=\"text/javascript\" />\r\n");
      out.write("\t<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/common.css\" />\r\n");
      out.write("\t<script src=\"./js/jquery-2.1.3.min.js\"></script>\r\n");
      out.write("\t<script src=\"./js/jquery.openwin.js\"></script>\r\n");
      out.write("\t<script src=\"./js/jquery.color.js\"></script>\r\n");
      out.write("\t<script src=\"./js/common.js\"></script>\r\n");
      out.write("\t<title>FunRoom - 「一人」を「楽しく」。</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<div id=\"wrapper\">\r\n");
      out.write("\t\t<div id=\"header\">\r\n");
      out.write("\t\t\t<p id=\"men\" class=\"colorChange\">Men</p>\r\n");
      out.write("\t\t\t<p id=\"women\" class=\"colorChange\">Women</p>\r\n");
      out.write("\t\t\t<p id=\"default\" class=\"colorChange\">Default</p>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div id=\"contents\">\r\n");
      out.write("\t\t\t<div id=\"outside\" class=\"content\">\r\n");
      out.write("\t\t\t\t<a href=\"#kitchen\" class=\"scrollNext\">キッチンへ</a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"kitchen\" class=\"content\">\r\n");
      out.write("\t\t\t\t<a href=\"#bathroom\" class=\"scrollNext\">風呂場へ</a><br /><br />\r\n");
      out.write("\t\t\t\t<a href=\"./questionnaire.jsp\" class=\"openwin\">(^-^)v</a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"bathroom\" class=\"content\">\r\n");
      out.write("\t\t\t\t<a href=\"#living\" class=\"scrollNext\">リビングへ</a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"living\" class=\"content\">\r\n");
      out.write("\t\t\t\t<a href=\"#entrance\" class=\"scrollNext\">玄関へ</a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"entrance\" class=\"content\">\r\n");
      out.write("\t\t\t\t<a href=\"#bye\"  class=\"scrollNext\">外へ</a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"bye\" class=\"content\">\r\n");
      out.write("\t\t\t\t<a href=\"#header\" class=\"scrollTop\">ありがとう！</a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
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
