// JavaScript Document

$(document).ready(function() {
   var position=0;  //최초위치-> 목적지
   var movesize=2; //이동하는 크기
   var timeonoff; //자동기능
   
   $('.partnerBox ul').after($('.partnerBox ul').clone());  //ul을 복제
   // $('해당태그').after('뒤에 옮겨놓을/만들 태그');
   
   /*
   function partnerMove(){   //왼쪽 방향으로 이동 (값을 감소)
        position-=movesize;  // 150씩 감소
    	$('.partnerBox').css('left',position);
		
		 if(position < -945){
			   $('.partnerBox').css('left',0);
			   position=0;
		 } 
		
   };
   */
   function partnerMove2(){   //오른쪽 방향으로 이동 (값을 증가) 
		position+=movesize;  // 150씩 감소
		$('.partnerBox').css('left',position);
		
		if(position > 0){
			$('.partnerBox').css('left',-2000);
			position=-2000;
		} 
	
   };

     timeonoff= setInterval(partnerMove2, 100); // 0.1초
    
   	$('.partnerBox').hover(function(){
		clearInterval(timeonoff);
	},function(){
		timeonoff= setInterval(partnerMove2, 100);	
	});
	
    
 });
