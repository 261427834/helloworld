$(document).ready(function(){	
/*首页*/		
function adhr(adhrs){
	$(adhrs).hover(function(){
		$(this).addClass("act");	
	},function(){
		$(this).removeClass("act");	
	})	
}
$(".hdbr p").stop().animate({left:$(".hdbr li.act").index()*120},500);
$(".hdbr li").hover(function(){
	$(".hdbr p").stop().animate({left:$(this).index()*120},500);
},function(){
	$(".hdbr p").stop().animate({left:$(".hdbr li.act").index()*120},500);
})
$(".iox-ct ul").width($(".iox-ct li").length*328);
$(".iox-cz li").click(function(){
	$(".iox-ct ul").stop().animate({left:-$(this).index()*984},500);
	$(this).addClass("act").siblings("li").removeClass("act");
})
$(".iox-lt a").click(function(){
	if(parseInt($(".iox-ct ul").css("left"))<0){
		$(".iox-ct ul").stop().animate({left:parseInt($(".iox-ct ul").css("left"))+984},500,function(){
			$(".iox-cz li").removeClass("act");
			$(".iox-cz li").eq(parseInt($(".iox-ct ul").css("left"))/984).addClass("act");
		});	
	}
})
$(".iox-rt a").click(function(){
	if(parseInt($(".iox-ct ul").css("left"))==0){
		$(".iox-ct ul").stop().animate({left:parseInt($(".iox-ct ul").css("left"))-984},500,function(){
			$(".iox-cz li").removeClass("act");
			$(".iox-cz li").eq(parseInt($(".iox-ct ul").css("left"))/984).addClass("act");
		});	
	}
})
$(".itx-rt a").hover(function(){
	$(this).stop().animate({paddingLeft:"10px"},300);
},function(){
	$(this).stop().animate({paddingLeft:"0"},300);
});
$(".ik-col li").hover(function(){
	$(".ik-col p").removeClass("act");
	$(this).find("p").addClass("act");
	$(".ik-img a").hide().eq($(this).index()).show();
})
/*客服*/
$('.float_qq2').hover(function(){
	$(this).stop().animate({"left":"-110px"},350)
},function(){
	$(this).stop().animate({"left":"0"},350)
})     
$('.float_qq5').hover(function(){
	$(this).find('.float_shwx').show();
},function(){
	$(this).find('.float_shwx').hide();
})
/*联系我们*/
$(".cubrb-show").click(function(){
	if($(this).find("p").hasClass("act")){
		$(this).find("p").removeClass("act");
		$(this).siblings(".cubrb-hide").slideUp(200);
	}else{
		$(this).find("p").addClass("act");
		$(this).siblings(".cubrb-hide").filter(':not(:animated)').slideDown(300);
	}	
})
/*关于博环*/
$(".au-col li").hover(function(){
	$(this).find("p").stop(true,true).fadeIn(300);	
},function(){
	$(this).find("p").stop(true,true).fadeOut(300);	
})
$(".au-col li").click(function(){
	$("html,body").animate({scrollTop: $(".au-bt .aub").eq($(this).index()).offset().top},"slow");
})



/*期刊列表*/
$(".qkf-xl p").click(function(e){
	if($(this).hasClass("act")){
		$(this).removeClass("act");
		$(this).siblings("ul").slideUp(200);
	}else{
		$(this).addClass("act");
		$(this).siblings("ul").filter(':not(:animated)').slideDown(300);
	}	
	if(e && e.stopPropagation){
		e.stopPropagation();
	}else{
		window.event.cancelBubble = true;
	}
})
$('body,html').click(function(){
	$(".qkf-xl p").removeClass("act");		
	$(".qkf-xl ul").hide();
})



 		
})