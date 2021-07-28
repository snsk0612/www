

$(document).ready(function() {
  
   //2depth 열기/닫기
   $('ul.dropdownmenu').hover(
      function() { 
         $('.dropdownmenu .menu ul').fadeIn('nomal',function(){$(this).stop();}); //모든 서브를 다 열어라
         $('#headerArea').animate({height:365},'fast').clearQueue();
      },function() {
         $('.dropdownmenu .menu ul').hide(); //모든 서브를 다 닫아라
         $('#headerArea').animate({height:200},'fast').clearQueue();
    });
    
    //1depth 효과
    $('ul.dropdownmenu li.menu').hover(
      function() { 
          $('.depth1',this).css('font-weight','#333');
      },function() {
         $('.depth1',this).css('font-weight','#333');
    });

    //tab 처리
    $('.dropdownmenu .menu .depth1').on('focus', function () {        
       $('.dropdownmenu .menu ul').fadeIn('normal');
       $('#headerArea').animate({height:400},'fast').clearQueue();
    });

   $('.dropdownmenu .m6 li:last').find('a').on('blur', function () {        
       $('.dropdownmenu .menu ul').hide();
       $('#headerArea').animate({height:200},'fast').clearQueue();
   });
});

//상단이동 코드

$(document).ready(function () {
            
   $('.topMove').hide();  //top버튼 보이지마~~~
 
   $(window).on('scroll',function(){   // 스크롤의 위치가 바뀌면 발생하는 이벤트
        var scroll = $(window).scrollTop();  //스크롤의 상단 부터의 거리
       
       
      //   $('.text').text(scroll);  // 스크롤의 거리를 출력

        if(scroll>1000){    //스트롤 top의 거리가 500px 보다 커지면
            $('.topMove').fadeIn('slow');  //top메뉴가 보인다
        }else{
            $('.topMove').fadeOut('fast'); //top메뉴가 안보인다
        }
   });
 
    // top메뉴를 클릭하면 상단으로 이동시킨다 
    $('.topMove').click(function(e){
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
       $("html,body").stop().animate({"scrollTop":0},1000); // 스크롤의 위치를 이동시킨다
    });


});

//푸터 패밀리

$(document).ready(function() {
	/*
	$('.select .arrow').click(function(){
		$('.select .aList').fadeIn('slow');			  
	});
	$('.select .aList').mouseleave(function(){
		$(this).fadeOut('slow');		  
	});
	*/
    $('.footer_family .arrow').toggle(function(){
		$('.footer_family .aList').fadeIn('slow');	
	}, function(){     
        $('.footer_family .aList').fadeOut('slow');	
	});

	//tab키 처리
	  $('.footer_family .arrow').on('focus', function() {       
              $('.footer_family .aList').show();	
       });

     $('.footer_family .aList li:last').find('a').on('blur', function(e) { 
         e.preventDefault();       
              $('.footer_family .aList').hide();
       });  
});

