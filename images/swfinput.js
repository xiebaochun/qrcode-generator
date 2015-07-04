function uploadevent(status) {
var filestr= new Array(); //һ 
 filestr=status.split("**_**"); //ַָ
 status=filestr[0];
 var filestrs=filestr[1]; 
			status += '';     
			switch (status) {
				case '1':
					alert('上传成功!');
					document.getElementById("logo").value=filestrs;
					break;
			   case '2':
	if(confirm('js call upload')){
		return 1;
	}else{
		return 0;
	}
break;

case '-1':
	alert('cancel!');
	window.location.href = "#";
break;
case '-2':
	alert('upload failed!');
	window.location.href = "#";
break;

default:
	alert(typeof(status) + ' ' + status);
			}
		}


var flashvars = {
"jsFunc":"uploadevent",
"imgUrl":"images/eweima.jpg",
"pid":"75642723",
"uploadSrc":false,
"showBrow":true,
"showCame":true,
"uploadUrl":"./saveavater.php?action=uploadavatar"
};

var params = {
menu: "false",
scale: "noScale",
allowFullscreen: "false",
allowScriptAccess: "always",
wmode:"transparent",
bgcolor: "#FFFFFF"
};

var attributes = {
id:"FaustCplus"
};

swfobject.embedSWF("FaustCplus.swf", "altContent", "616", "450", "9.0.0", "expressInstall.swf",flashvars,params,attributes);