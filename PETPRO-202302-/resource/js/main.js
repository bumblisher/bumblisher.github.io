$(function(){

	$('#selType').change(function(){
		var type = $(this).find(':selected').attr('value');
		$(this).parent().removeClass();
		$(this).parent().addClass(type);
	});

	$('#radio_pop01 + label').click(function(){
		$(this).parents(".popup").find(".box_info").removeClass("cat");
	}); 
	$('#radio_pop02 + label').click(function(){
		$(this).parents(".popup").find(".box_info").addClass("cat");
	}); 
	
	$('.pop_cont .list_info > ul li .tit button').click(function(){
		$(this).toggleClass("on");
	}); 
	
	$('.list_tab li').click(function(){
		$('.list_tab li').removeClass("on");
		$(this).addClass("on");
	}); 

	$('.menubtn').on('click', function(){
		$('.menu').toggleClass('is-active');
		$('header').toggleClass('onmenu');
	});

	$('.wrap.mob header .nav > ul > li > a').click(function(){
		$(this).next().slideToggle(300);
	}); 
});




window.onscroll = function() {myFunction()};
function myFunction() {
	if ($('html, body').scrollTop() > 687) {
		$("#mainHeader").removeClass("blue");
	} else {
		$("#mainHeader").addClass("blue");
	}
}
