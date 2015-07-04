<?php  
    $value=$_REQUEST['text'];
	$bg=$_GET['bg'];
    $fg=$_GET['fg'];
	$wk=$_GET['wk'];
    $nk=$_GET['nk'];
	$size=$_GET['size'];
    $level=$_GET['level'];
	$radio=$_GET['radio'];
    $logo=$_GET['logo'];
	if($logo!=""){
	$logo='php/'.$logo;
	}
	$ccolor="#000000";
    $filepath="./imgs";
    include "qrcode_img.php";
    /**
     * 输出二维码
     * @param type $org_data
     * @param type $filename 图片名
     * @param type $filetype 图片后缀
     * @param type $imgwh 图片大小
     * @param type $filelogo 图片logo
     * @param type $ptcolor 定点
     * @param type $inptcolor 内定点
     * @param type $fcolor 前景色
     * @param type $bcolor 背景色
     * @param type $ccolor 内容
     * @param type $style 样式：2液态 1直角 0圆角
     */
    //qrcode_image_out($value,null,$size,$logo,null,$wk,$nk,$fg,$bg,null,$radio);
	$z=new Qrcode_image;
    $z->set_qrcode_error_correct($level);   # set ecc level H
    $z->qrcode_image_out2($value,$filepath,$size,$logo,'',$wk,$nk,$fg,$bg,'#000000',$radio);
	//$z->mkimage($value,$wk,$nk,$fg,$bg,$ccolor,$radio);
?> 