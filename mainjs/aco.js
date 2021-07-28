// $(document).ready(function(){
   
//     var timeonoff;
//     var imageCount=2;   //총 리스트 개수
//     var cnt=1;
//     var left2;		
      
//     function move_gallery(){
//             cnt++;  // 1 2 3 4 1 2 3 4 ......
        
//           if(cnt==1){
//               left2=139;
//           }else if(cnt==2){
//               left2=888; 
//           }
//           $('.eventSlideMenu .img02').animate({left:left2},748).clearQueue();
        
//             if(cnt==imageCount)cnt=0;
//       }
      
//       timeonoff= setInterval(move_gallery, 2000);
  
  
  
    $('.eventSlideMenu ul li span').mouseenter(function(event){  //각각의 투명버튼에 마우스를 올리면
        var $target=$(event.target);  // var $target=$(this);
         //사이코패스 동원..살인마~~ 유영철~~~
        var left2
  
        if($target.is('.buttonMenu01')){  //첫번째 투병버튼에 마우스를 올렸냐??
             left2=888; 
        }else if($target.is('.buttonMenu02')){ 
             left2=139; 
        }
        $('.eventSlideMenu .img02').animate({left:left2},1027).clearQueue();
  
        
      });
  // });    