$(document).ready(function() {

    $('.nav_menu >li>a').on('click',function(){
        var indexG = $(this).parent().index();
	
		var sub_menu = $(".nav_menu").children().eq(indexG).children('ul');

		if(sub_menu.is(":visible")){
			sub_menu.slideUp();
            $(".nav_menu").children().eq(indexG).removeClass("active");
        }
        else{
            sub_menu.slideDown();
            $(".nav_menu").children().eq(indexG).addClass("active");
        }
    });

    
});
