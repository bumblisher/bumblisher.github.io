$(function(){
	// 햄버거 메뉴
	$(".btn_menu").on("click", function(){
        $(this).toggleClass("on");
		$("header").toggleClass("active");
    }); 

	$(".tab_btn button").on("click", function(){
		var idx = $(this).parent().index();

		$(".tab_btn button").removeClass("on");
		$(this).addClass("on");
		$(".tab_cont > li").removeClass("on");
		$(".tab_cont > li").eq(idx).addClass("on");
	});
	
});




