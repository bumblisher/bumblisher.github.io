$(document).ready(function(){

    function nav() {
        var $gnb = $(".header");
        var $dep1 = $(".dep1");

        $dep1.on("click", function(){
            if(!$dep1.hasClass("on")){
                $dep1.addClass("on");
                $(".dep2_box").stop().slideDown(); 
            }else{
                $dep1.removeClass("on");
                $(".dep2_box").stop().slideUp(); 
            }
        });
        $gnb.on("mouseleave", function(){
            $dep1.removeClass("on");
            $(".dep2_box").stop().slideUp();
        });
    }
    nav();

    function mainTab() {
        var $menu = $(".tab_main ul li a");

        $menu.on("click", function(){
            var idx = $(this).parent().index();
            
            if(idx == 0){
                $(".tab_main .more").show();
            }else{
                $(".tab_main .more").hide();
            }
            $(".tab_main ul li").eq(idx).addClass("on").siblings().removeClass("on");
            $(".tab_main_cnt > div").eq(idx).show().siblings().hide();
        });
    }
    mainTab();

    function myPage(){
        var $mypage = $(".mypage > a");

        $mypage.on("click", function(){
            if(!$(".mypage").hasClass("on")){
                $(".mypage").addClass("on");
            }else{
                $(".mypage").removeClass("on");
            }
        });
    }
    myPage();
});