$(function(){

	// 팝업열기
	$('#btnTxt').click(function(){
		$('#grpTxtRed').show();
	}); 
	// 햄버거 메뉴
	$(".btn_menu").on("click", function(){
        $(this).toggleClass("on");
		$("header").toggleClass("active");
    });
	// 메뉴이동
	var sec03 = $("#sec03").offset().top;
	var sec04 = $("#sec04").offset().top;
	var sec05 = $("#sec05").offset().top;

	$("#btnSec01").click(function(e){
		e.preventDefault();
		$("html,body").animate({scrollTop : 0},400);
		$(".btn_menu").removeClass("on");
		$("header").removeClass("active");
	});
	$("#btnSec03").click(function(e){
		e.preventDefault();
		if($(this).parents(".wrap").hasClass("mob")){
			$("html,body").animate({scrollTop : sec03-59},400);
		}else{
			$("html,body").animate({scrollTop : sec03-100},400);
		}
		$(".btn_menu").removeClass("on");
		$("header").removeClass("active");
	});
	$("#btnSec04").click(function(e){
		e.preventDefault();
		if($(this).parents(".wrap").hasClass("mob")){
			$("html,body").animate({scrollTop : sec04-59},400);
		}else{
			$("html,body").animate({scrollTop : sec04-100},400);
		}
		$(".btn_menu").removeClass("on");
		$("header").removeClass("active");
	});
	$("#btnSec05").click(function(e){
		e.preventDefault();
		if($(this).parents(".wrap").hasClass("mob")){
			$("html,body").animate({scrollTop : sec05-59},400);
		}else{
			$("html,body").animate({scrollTop : sec05-100},400);
		}
		$(".btn_menu").removeClass("on");
		$("header").removeClass("active");
	});
});




