<?php
$rs = array();
$filename='logo_'.date("YmdGis").'.jpg';
switch($_GET['action']){

	case 'uploadtmp':
		$file = 'uploadtmp.jpg';
		@move_uploaded_file($_FILES['Filedata']['tmp_name'], $file);
		$rs['status'] = 1;
		$rs['url'] = './php/' . $file;
	break;

	case 'uploadavatar':
		$input = file_get_contents('php://input');
		$data = explode('--------------------', $input);
		@file_put_contents('php/'.$filename, $data[0]);
		//@file_put_contents('./avatar_2.jpg', $data[1]);
		$rs['status'] = 1;
	break;
	default:
		$rs['status'] = -1;
}
echo $rs['status'].'**_**'.$filename;
//print json_encode($rs);
?>
