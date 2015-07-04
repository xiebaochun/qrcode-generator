<?php
if(isset($_GET['url'])){ 
$filename=$_GET['url'];//获取参数 
header('Content-type: image/jpeg'); 
header("Content-Disposition: attachment; filename=eweimanet".date('YmdHis').rand(100,999).".jpg"); 
readfile($filename);
//注意：header函数前确保没有任何输出 

exit;//结束程序 
}
?>
