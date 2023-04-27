$(function(){

	// 팝업열기
	$('#btnPop').click(function(){
		$('#testPop').addClass("on");
	}); 
	// 팝업닫기
	$('#testPop').click(function(){
		$(this).removeClass("on");
	}); 
	// 햄버거 메뉴
	$(".btn_menu").on("click", function(){
        $(this).toggleClass("on");
		$("header").toggleClass("active");
    });
	// 메뉴이동
	var sec02 = $("#sec02").offset().top;
	var sec03 = $("#sec03").offset().top;
	$("#btnSec02").click(function(e){
		e.preventDefault();
		$("html,body").animate({scrollTop : sec02},400);
		$(".btn_menu").removeClass("on");
		$("header").removeClass("active");
	});
	$("#btnSec03").click(function(e){
		e.preventDefault();
		$("html,body").animate({scrollTop : sec03},400);
		$(".btn_menu").removeClass("on");
		$("header").removeClass("active");
	});
});




