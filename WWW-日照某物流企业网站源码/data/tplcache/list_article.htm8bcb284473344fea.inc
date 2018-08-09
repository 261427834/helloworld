<?php
$z[0]=Array("field","",189,208);
$z[0][4]['name']="title";
$z[1]=Array("global","",209,235);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",278,307);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",349,407);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("global","",447,472);
$z[4][4]['name']="cfg_cmsurl";
$z[5]=Array("channel","\r\n                  <li class=\"hvr-sweep-to-bottom\"><a href=\"[field:typeurl/]\">[field:typename/]<i><img src=\"/skin/images/nav-but[field:global name=autoindex runphp=\"yes\"]@me=@me+1;[/field:global].png\" alt=\"\"/></i></a></li>\r\n                  ",2136,2594);
$z[5][4]['type']="top";
$z[5][4]['row']="10";
$z[5][4]['currentstyle']="<li class='active'><a href='~typelink~' ~rel~>~typename~<i><img src='/skin/images/nav-but3.png'/></i></a></li>";
$z[6]=Array("list","\r\n              <div class=\"blog-to\">\r\n        <div class=\"blog-top\">\r\n                  <div class=\"blog-left\"> <b>[field:pubdate function=\"MyDate('d',@me)\"/]</b> <span>[field:pubdate function=\"MyDate('Y-m',@me)\"/]</span> </div>\r\n                  <div class=\"top-blog\"> <a class=\"fast\" href=\"[field:arcurl/]\">[field:title/]</a>\r\n            <p class=\"sed\">[field:description function=\"cn_substr(@me,400)\"/]...</p>\r\n            <a  href=\"[field:arcurl/]\" class=\"more\">查看详细<span> </span></a> </div>\r\n                  <div class=\"clearfix\"> </div>\r\n                </div>\r\n      </div>\r\n              ",3292,3938);
$z[6][4]['pagesize']="4";
$z[7]=Array("pagelist","",4047,4118);
$z[7][4]['listitem']="info,index,end,pre,next,pageno";
$z[7][4]['listsize']="5";
$z[8]=Array("include","",4197,4234);
$z[8][4]['filename']="footer.htm";

?>