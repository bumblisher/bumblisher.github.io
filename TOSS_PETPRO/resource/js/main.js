$(function(){

	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation:true,
        navigationPostion:'right'
	});

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
	
});



