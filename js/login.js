window.onload = function(){
	var oInp = document.getElementsByTagName("input");
	var syzm = document.getElementsByClassName("syzm");
	var yzm = document.getElementsByClassName("yzm");
	var tishi = document.getElementsByClassName("tishi")[0];
	
	var zhuce = document.getElementsByClassName("zhuce")[0];
	//注册页面
	//点击获取验证码 判断输入框状态
	var reg = /^\w+@\w+(\.\w+)+$/;
	var reg1 = /^[1-3]\d{10}$/;
	var reg2 = /[a-zA-Z0-9]{6,16}/

	syzm[0].onclick = function(){
		tishi.innerHTML == ''
		
		//alert(reg.test(oInp[0].value));
		if(oInp[0].value == ""){
			tishi.innerHTML = "邮箱或手机号码不能为空";
			oInp[0].style.border = "1px solid red"
		}else if((!reg1.test(oInp[0].value))&&(!reg.test(oInp[0].value))){
			tishi.innerHTML = "您输入的手机号或邮箱不正确";
			oInp[0].style.border = "1px solid red"
		}
	};
	zhuce.onclick = function(){
		tishi.innerHTML = ""
		for(var i = 0; i<4;i++){
			oInp[i].style.border = 0
			oInp[i].index = i
			if(oInp[i].value == ""){
				oInp[i].style.border = "1px solid red";
		}
	}
		//alert(reg2.test(oInp[1].value))
		if(!reg2.test(oInp[1].value)){
			tishi.innerHTML = "您输入的密码格式不正确";
			oInp[1].style.border = "1px solid red"
		}else if((!reg1.test(oInp[0].value))&&(!reg.test(oInp[0].value))){
			tishi.innerHTML = "您输入的手机号或邮箱不正确";
			oInp[0].style.border = "1px solid red"
		}
		if(!(oInp[2].value ==yzm[0].innerHTML)){
			tishi.innerHTML = "您输入的验证码有误"
			oInp[2].style.border = "1px solid red";
		}
		var name = oInp[0].value;
		var pass = oInp[1].value;
		var yzm0 = oInp[2].value;
		var syzm0 = oInp[3].value;
		setCookie("name",name,setCookieDate(7),"/");
		setCookie("pass",pass,setCookieDate(7),"/");
		setCookie("yzm0",yzm0);
		setCookie("syzm0",syzm0);
		setCookie("123",123)
		setCookie("a",true)
		if((oInp[0].value!= "")&&(oInp[1].value!= '')&&(oInp[2].value!='')&&(oInp[3].value!= '')){
			$(".reg-bn1").css({"display":"block"})
					$(".reg-bn").css({"display":"none","right":"-242px"})
					$(".reg-bn1").animate({"right":"100px"},1000,function(){
						$(".reg").html("欢迎登录")
					})
		}
		
	}
	//获取手机验证码
	var arrs = ['0','1','2','3','4','5','6','7','8','9'];
	syzm[0].onclick = function(){
		var arr1 = '';
		for(var i = 0; i<4;i++){
			var e = Math.floor(Math.random()*arrs.length);
			arr1 += arrs[e];
			oInp[3].value = arr1;
		}
	};
	
	//获取验证码
	var arr = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','0','2','1','3','4','5','6','7','8','9'];
	//console.log(arr.length)
	var fn = function(){
		var arr1 = ''
		for(var i = 0; i<4; i++){
			var e = Math.floor(Math.random()*arr.length);
			arr1 += arr[e];
			yzm[0].innerHTML = arr1;
		}
	};
	fn();
	yzm[0].onclick = function(){
		fn();
	};
	
	//登录
	$(".denglu").click(function(){
		var $tishi1 = $(".reg-bn1 .tishi");
		var name1 = oInp[5].value;
		var pass1 = oInp[6].value;
		//alert(name)
		if(name1 == getCookie("name")&&pass1==getCookie("pass")){
			alert("登陆成功")
			window.location.href = "index.html"
		}else{
			$tishi1.html("用户名或密码错误")
		}
		oInp[5].value = '';
		oInp[6].value = '';
	})
	//登录界面的滑动事件，面向对象思想
	var oDiv = document.getElementById("spanhua");
	new Drag('spanhua');
}
function Drag(id){
				var that = this;
				this.disX = 0;
				this.oDiv = document.getElementById(id);
				this.oDiv.onmousedown = function(evt){
					that.fnDown(evt);
				}
		};		
				Drag.prototype.fnDown = function(evt){
					var e = evt || window.event;
					var that = this;
					this.disX = e.offsetX;
					document.onmousemove = function(evt){
						that.fnMove(evt);
					}
					document.onmouseup = function(){
						that.fnUp();
					}
				};
				Drag.prototype.fnUp = function (){
						document.onmousemove = null;
					};
				Drag.prototype.fnMove = function (evt){
						var e = evt || window.event;
						var l = e.clientX - this.disX;
						if(l < 0){
							l = 0;
						}else if( l > 220){
						 l = 220;	
						 $(".hua p").html("验证通过").next().css("background","url(img/hua1.jpg) no-repeat")
						 $(".huaps").css("background","#a6e69a");
						}
						this.oDiv.style.left = l + 'px';
	};








