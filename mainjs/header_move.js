$(document).ready(function () {
    
    var smh=$('.visual').height();
    var on_off=false;  //false(안오버)  true(오버)  
    
    
        $('#headerArea').mouseenter(function(){
           // var scroll = $(window).scrollTop();
            $(this).css('background','rgba(255,255,255,1)');
            $('#headerArea a').css('color','rgba(0,0,0,1)'); 

            on_off=true;
        });
       $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();
            
            if(scroll>=0 && scroll<smh-500 ){
                $(this).css('background','rgba(0,0,0,.2)'); 
                $('#headerArea .depth1').css('color','rgba(255,255,255,1)');
            }else if(scroll>smh-500){
                $(this).css('background','rgba(255,255,255,1)'); 
                $('#headerArea .depth1').css('color','rgba(0,0,0,1)');
            }
            on_off=false;    
       });
    
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();

            if(scroll>smh-500){//스크롤300까지 내리면
                $('#headerArea').css('background','rgba(255,255,255,1)');
                $('#headerArea a').css('color','rgba(0,0,0,1)');
            }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
                if(on_off==false){
                    $('#headerArea').css('background','rgba(0,0,0,.2)');
                    $('#headerArea a').css('color','rgba(255,255,255,1)');
                }
            }; 
            
         });
 });