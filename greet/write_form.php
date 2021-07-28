<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>한국공항:고객센터</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub6common.css">
    <link rel="stylesheet" href="./css/write_form.css">
    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>
     <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
</head>
<body>
    <div class="wrap">
        <!--서브헤더영역-->
        <? include "../common/sub_head.html" ?>

        <div class="visual">
            <img src="./common/images/visual.jpg" alt="">
        </div>
        <div class="sub_menu">
                <h3>고객센터</h3>
                <p></p>
            <div class="submenu_box">
                <div class="sub_inner">
                    <ul>
                    <li><a href="../concert/list.php">KAS소식</a></li>
                        <li class="current"><a href="./list.php">공지사항</a></li>
                        <li><a href="../sub6/sub6_3.html">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    HOME &gt; 고객센터 &gt; <strong>공지사항</strong>
                </div>
                <h2>공지사항</h2>
            </div>

            <div class="content_area">
                <h3>공지사항 작성</h3>
                <form  name="board_form" method="post" action="insert.php"> 
                    <div id="write_form">
                        <div id="write_row1">
                            <div class="col1"> 닉네임 </div>
                            <div class="col2"><?=$usernick?></div>
                            <div class="col3">
                                <label for="html_ok">HTML 쓰기</label>
                                <input type="checkbox" name="html_ok" value="y">
                            </div>
                        </div>
                        <div id="write_row2">
                            <label for="subject" class="col1"> 제목 </label>
                            <input type="text" name="subject" class="col2">
                        </div>
                        <div id="write_row3">
                            <label for="subject" class="col1"> 내용 </label>
                            <textarea rows="15" cols="79" name="content" class="col2"></textarea>
                        </div>
                    </div>
                    <div id="write_button">
                        <label for="w_submit" class="hidden">등록</label>
                        <input type="submit" id="w_submit" value="등록">
                        <a href="list.php?page=<?=$page?>">목록</a>
                    </div>
		        </form>
            </div>
        </article>    

        <!--서브푸터영역-->
        <? include "../common/sub_foot.html" ?>
    </div>
    
 <!--JQuery-->
 <script src="../common/js/jquery-1.12.4.min.js"></script>
 <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
 <script src="../common/js/fullnav.js"></script>  
</body>
</html>    