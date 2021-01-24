$(document).ready(function(){
    
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

    function nav() {
        var $gnb = $(".header");
        var $dep1 = $("nav .dep1");
        var $dep2 = $("nav .dep2");

        $dep1.on("mouseover", function(){
            if(!$dep1.hasClass("on")){
                $dep1.addClass("on");
                $(".dep2_box").stop().slideDown(); 
            }else{
               // $dep1.removeClass("on");
               // $(".dep2_box").stop().slideUp(); 
            }
        });
        
        $gnb.on("mouseleave", function(){
            $dep1.removeClass("on");
            $(".dep2_box").stop().slideUp();
        });
        
        $dep2.find("> li > a").on("click", function(){
            var $ths = $(this).parent();
            
            if($ths.hasClass("on")){
                $ths.removeClass("on");
            }else{
                $ths.addClass("on").siblings().removeClass("on");
            } 
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

    function tab(){
        var $tab = $(".tab ul li a");

        $tab.on("click", function(){
            
            var idx = $(this).parent().index();

            $(".tab ul li").eq(idx).addClass("on").siblings().removeClass("on");
            $(".tab_cont > div").eq(idx).addClass("on").siblings().removeClass("on");
        });
    }

    tab();

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

    function btnTop(){
        var $btnTop = $(".btn_top");
    
        $(window).scroll(function () {
            var nowScroll = parseInt($(document).scrollTop());
            var winHeight = $(window).height();
            var docHeight = $(document).height();
            var floatPos = parseInt(docHeight) - parseInt(winHeight) - 152;

            if(nowScroll > floatPos){
                $btnTop.addClass('fix')
            }else{
                $btnTop.removeClass('fix')
            }
            if ($(this).scrollTop() > 200) {
                $btnTop.fadeIn(300);
            } else {
                $btnTop.fadeOut(300);
            }
        });
        $btnTop.click(function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 300);
        });
    }
    btnTop();

    // 팝업 임시 스크립트
    function exPop(){
        var $exPopBtn = $(".exPopBtn");
        var $exPop = $("#exPop");
        var $popClose = $(".btn_close");
        
        var $exAlertBtn = $(".exAlertBtn");
        var $exAlert = $("#exAlert");
        var $exAlertClose = $(".alert .btn_cm");

        $exPopBtn.click(function (e) {
            e.preventDefault();
            $exPop.addClass("on");
        });
        $popClose.click(function (e) {
            e.preventDefault();
            $exPop.removeClass("on");
        });

        $exAlertBtn.click(function (e) {
            e.preventDefault();
            $exAlert.addClass("on");
        });
        $exAlertClose.click(function (e) {
            e.preventDefault();
            $exAlert.removeClass("on");
        });
    }
    exPop();
});