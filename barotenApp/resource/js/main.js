$(document).ready(function() {

    $('.tab_tit > button').on('click',function(){
        var indexG = $(this).index();
        $('.tab_tit > button').removeClass('on');
        $(this).addClass('on');
        
        //var nowCont = $('.tab_cont').index(indexG);

        

    });

    
});
