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
});



