//jQuery ready
$(function() {
    var host = "http://qiuguanzhu.cn/";
	var qrcode_default_options = {
		text:"hello world!",
		bg:"ffffff",
		fg:"000000",
		wk:"000000",
		nk:"000000",
		size:"100",
		radio:"1",
		level:"M",
		logo:""
	};
	var $result = $("#result");
	var $setting = $("#setting")
	$("#index-bootom-btn").click(function(){
		$(this).addClass("hide");
		$("#setting").addClass("show");
	});

	$("#setting-vav-text-btn").click(function(){
		$(this).addClass("btn-primary");
		$("#setting-vav-mingpian-btn").removeClass("btn-primary");
		$("#setting #ming-pian").addClass("hide").removeClass("show");
		$("#setting #text").addClass("show").removeClass("hide");
	});
	$("#setting-vav-mingpian-btn").click(function(){
		$(this).addClass("btn-primary");
		$("#setting-vav-text-btn").removeClass("btn-primary");
		$("#setting #ming-pian").addClass("show").removeClass("hide");
		$("#setting #text").addClass("hide").removeClass("show");
	});
	$("#mingtpian-generate-btn").click(function(){
		$setting.addClass("hide").removeClass("show");
		$result.addClass("show").removeClass("hide");
		set_qrcode_img_url(1);
	});
	$("#text-generate-btn").click(function(){
		$setting.addClass("hide").removeClass("show");
		$result.addClass("show").removeClass("hide");
		set_qrcode_img_url(2);
	});
	$("#result-back-btn").click(function(){
		$setting.addClass("show").removeClass("hide");
		$result.addClass("hide").removeClass("show");
	});

	function set_qrcode_img_url(mode){
		var text;
		//(mode == 1)?$()
		qrcode_default_options.text="asdtrtr";
		var url = host+"api2.php?" + ob_to_url(qrcode_default_options);
		console.log(url);
		$("#erweima-img").attr("src",url);
	}

	function ob_to_url(obj){
		var result="";
		for(var p in obj){
			if(obj.hasOwnProperty(p)){
				result += p + "=" +obj[p]+"&";
			}
		}
		return result;
		// or use the jquery each
		// $.each(obj,function(key,value){
		// 	result+=key+"="+value+"&";
		// });
		// return result;
	}
});