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
    }
    allmenu();
    
});