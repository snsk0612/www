// JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=3;   //이미지개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#fff'); //첫번째 불켜
    $('.btn1').css('width','30');
    
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
 
    function moveg(){
      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     for(var i=1;i<=imageCount;i++){
            $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
     }
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
	 		                    
     for(var i=1;i<=imageCount;i++){
          $('.btn'+i).css('background','#fff'); //버튼불다꺼!!
         $('.btn'+i).css('width','16'); //버튼 원래의 크기
      }
      $('.btn'+cnt).css('background','#fff');//자신만 불켜
        $('.btn'+cnt).css('width','30');  //버튼 늘어난 크기              
       if(cnt==imageCount)cnt=0;
     }
    timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //setInterval( function(){처리코드} , 4000)
 
    
   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target
         clearInterval(timeonoff); //타이머 중지     
	 
	     for(var i=1;i<=imageCount;i++){
	         $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
         } 
	 
		  if($target.is('.btn1')){
				 cnt=1;
		  }else if($target.is('.btn2')){
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 		
		  } 
		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  for(var i=1;i<=imageCount;i++){
			  $('.btn'+i).css('background','#fff'); //버튼 모두불꺼
              $('.btn'+i).css('width','16');
		  }
          $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
           $('.btn'+cnt).css('width','30');
       
          if(cnt==imageCount)cnt=0;  //카운트 초기화
          timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
       
          if(onoff==false){
		   onoff=true;
		   $('.ps').css('background','url(images/pause.png)');
	     }
        
    });


	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
       if(onoff==true){
	       clearInterval(timeonoff);   // stop버튼 클릭시
		   $(this).css('background','url(images/play.png)');
           onoff=false;   
	   }else{  // false
		  timeonoff= setInterval( moveg , 4000); //play버튼 클릭시
		   $(this).css('background','url(images/pause.png)');
		   onoff=true; 
	   }
  });	


});



//올라오는 효과

$(document).ready(function () {
  //  //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
  //     //스크롤top의 좌표를 담는다

      $('.scale').text(scroll);
      //스크롤 좌표의 값을 찍는다.

//        //스크롤의 거리의 범위를 처리
      if(scroll>500){         
      $('#content section:eq(0)').addClass('boxMove');}
      if(scroll>1000){         
      $('#content section:eq(1)').addClass('boxMove');}
      if(scroll>1900){         
      $('#content section:eq(2)').addClass('boxMove');}
      if(scroll>2600){         
      $('#content section:eq(3)').addClass('boxMove');}
      if(scroll>3300){         
      $('#content section:eq(4)').addClass('boxMove');}
      if(scroll>3000){         
      $('#content .notice_news').addClass('boxMove');}
      
  });


});
