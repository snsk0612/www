//sticky menu
$(document).ready(function () {
        
    $('.slideMenu li:eq(0)').find('a').addClass('spy'); 

    var smh= $('.main').height(); 

    $(window).on('scroll',function(){ 

        var scroll = $(window).scrollTop(); 
        $('.text').text(scroll); 
        
        if(scroll>710){ 
            $('.navBox').addClass('navOn'); 
            $('header').hide();  
        }else{ 
            $('.navBox').removeClass('navOn'); 
            $('header').show();
        }
        
        $('.subNav li').find('a').removeClass('spy'); 
        
        if(scroll>=0 && scroll<2100){ 
            $('.subNav li:eq(0)').find('a').addClass('spy'); 

        }else if(scroll>=1700 && scroll<3700){
            $('.subNav li:eq(1)').find('a').addClass('spy');

        }else if(scroll>=1700 && scroll<5300){
            $('.subNav li:eq(2)').find('a').addClass('spy');
        }
        
    });
});