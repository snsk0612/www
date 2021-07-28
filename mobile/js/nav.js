$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_btn").click(function() { //메뉴버튼 클릭시
       
       var documentHeight =  $(document).height();
       $("#gnb").css('height',documentHeight); 

      if(op==false){
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false];
    var arrcount=onoff.length;
    
    //console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(e){
      e.preventDefault();
        var ind=$(this).parents('.depth1').index();
        
        //console.log(ind);
        
       if(onoff[ind]==false){
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow');
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
        $(this).parents('.depth1').siblings('li').css('background','#154297');  
        $(this).parents('.depth1').siblings('li').children('a').css('color','#fff');
         for(var i=0; i<arrcount; i++) onoff[i]=false; 
         onoff[ind]=true;
           
         $('.depth1 span').text('+');   
         $(this).find('span').text('-');
         $(this).css('color','#fff');
         $(this).parents('.depth1').css('background','#154297');  
            
       }else{
         $(this).parents('.depth1').find('ul').slideUp('fast'); 
         onoff[ind]=false;   
           
         $(this).find('span').text('+');     
         $(this).css('color','#fff');
         $(this).parents('.depth1').css('background','#154297');  
       }
    });    
  
  });


     //상단이동코드
$(document).ready(function () {
            
  $('.topMove').hide();

 $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
     
     
     //  $('.text').text(scroll);//스크롤거리를 출력
      if(scroll>300){
          $('.topMove').fadeIn('slow');
      }else{
          $('.topMove').fadeOut('fast');
      }
 });
      //top메뉴를 클릭하면 상단으로 이동시킨다
  $('.topMove').click(function(e){
     e.preventDefault();
      //상단으로 스르륵 이동합니다.
     $("html,body").stop().animate({"scrollTop":0},1000); 
  });
});


