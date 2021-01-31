$(document).ready(function(){
    
    function allmenu(){
        var allmenu = $(".allmenu");
        var closeMenu = $(".closemenu");
        var nav = $(".menu > nav");

        allmenu.on("click", function(){            
            if(!nav.hasClass("on")){
                nav.stop().animate({left:"0%"});
                nav.addClass("on");
                $('body').css("overflow", "hidden");
            }
        });

        closeMenu.on("click", function(){
            if(nav.hasClass("on")){
                nav.stop().animate({left:"100%"});
                nav.removeClass("on");
                $('body').css("overflow", "scroll");
            }
        });

        $(".dep2.ele > li > a").on("click", function(){
            if($(this).hasClass("on")){
                $(this).removeClass("on");
            }else{
                $(this).addClass("on");
            }
        });
    }
    allmenu();
    
    function accordion(){
        var $acc = $(".accordion > ul > li");

        $acc.find("a").on("click", function(){
            var $acclist = $(this).parent();
            if($acclist.hasClass("on")){
                $acclist.removeClass("on");
                $(this).next().stop().slideUp();
            }else{
                $acclist.addClass("on");
                $(this).next().stop().slideDown();
            }
        });
    }
    accordion();

    function tab(){
        var $tab = $(".tab ul li a");

        $tab.on("click", function(){
            
            var idx = $(this).parent().index();

            $(".tab ul li").eq(idx).addClass("on").siblings().removeClass("on");
            $(".tab_cont > div").eq(idx).addClass("on").siblings().removeClass("on");
        });
    }
    tab();

});