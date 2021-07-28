                        $('.title_menubox a').click(function(e){
                            e.preventDefault();

                            var value=0;

                            if($(this).hasClass('link1')){  //첫번째 메뉴 버튼을 클릭하면
                            value= $('.slide_con:eq(0)').offset().top + -200;  // 해당 요소의 상단(top)까지의 거리 
                            }else if($(this).hasClass('link2')){  //두번째 메뉴 버튼을 클릭하면
                            value= $('.slide_con:eq(1)').offset().top + -200; 
                            }
                            
                            $("html,body").stop().animate({"scrollTop":value},1000);
                        });
                