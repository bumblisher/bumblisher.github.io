$(document).ready(function() {

    $('.nav_menu >li>a').on('click',function(){
        var indexG = $(this).parent().index();
        var hasC = $(this).parent().hasClass("nodep");
		var sub_menu = $(".nav_menu").children().eq(indexG).children('ul');

		if(sub_menu.is(":visible")){
			sub_menu.css("display","block");
            sub_menu.slideUp();
            $(".nav_menu").children().eq(indexG).removeClass("active");
        }else if(hasC){
            $('.nav_menu li ').removeClass("on");
            $(this).parent().addClass("on")
        }
        else{
            sub_menu.slideDown();
            $(".nav_menu").children().eq(indexG).addClass("active");
        }
        
    });
    $('.nav_menu > li > ul > li >  a').on('click',function(){
        
        var sub_menu2 = $(this).siblings("ul");

        $('.nav_menu li ').removeClass("on");
        $(this).parent().addClass("on")
    
        if(sub_menu2.is(":visible")){
            $('.nav_menu ul ul ').slideUp();
        }
        else{
            $('.nav_menu ul ul ').slideUp();
            sub_menu2.slideDown();
        }
    });
    $('.nav_menu > li > ul > li > ul  a').on('click',function(){
        
        $('.nav_menu ul ul > li ').removeClass("on");
        $(this).parent().addClass("on")
    
    });
    $('.btn_menu').on('click',function(){
        
        $('aside').toggleClass("hide");
    });
    

    $('.btn_tab').on('click',function(){
        $('.btn_tab').removeClass("on");
        $(this).addClass("on")
    });
    $('.tab_cont_list button').on('click',function(){
        $('.tab_cont_list li').removeClass("on");
        $(this).parent().addClass("on")
    });
    

    //  모바일
    $('.btn_aside').on('click',function(){
        $('body').addClass("menu_on");
    });
    $('.aside_info .btn_close').on('click',function(){
        $('body').removeClass("menu_on");
    });
    

    //슬라이드토글
    $('.box_board.noti .tog').on('click',function(){
        $(this).next(".cont").slideToggle(0);
    });

    //슬라이드토글
    $('.list_tog li button').on('click',function(){
        $(this).next(".cont").stop().slideToggle(300);
    });
    

});

