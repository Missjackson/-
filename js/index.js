$(function(){
	$(".close_fix").click(function(){
		$(".fix").css("display","none")
	})
	
	
	//轮播图
	
	var $li = $("#nav ul li");
	var $a = $("#nav1 .btn a");
	var $a1 = $("#nav1 .btn1 .leftbtn");
	var $a2 = $("#nav1 .btn1 .rightbtn")
	var length = $li.size()
	var _index = -1;
	change()
	var timer = setInterval(change,3000)
	$a.mouseover(function(){
		clearInterval(timer)
		_index = $(this).index()
			$a.eq(_index).css("background","#E5004A").siblings().css("background","#909090")
			$li.eq(_index).fadeIn(500).siblings().fadeOut(500)
	})
	$a.mouseout(function(){
		clearInterval(timer)
		timer = setInterval(change,3000)
	})
	$("#nav1").mouseenter(function(){
		$a1.animate({"opacity":"0.6"})
		$a2.animate({"opacity":"0.6"})
	})
	$("#nav1").mouseleave(function(){
		$a1.animate({"opacity":"0"})
		$a2.animate({"opacity":"0"})
	})
	$a1.click(function(){
		clearInterval(timer)
		_index --;
		if(_index <= -1){
			_index = 5;
		}
		
		$li.eq(_index).fadeIn(500).siblings().fadeOut(500)
		$a.eq(_index).css("background","#E5004A").siblings().css("background","#909090")
		timer = setInterval(change,3000)
	})                                          
	$a2.click(function(){
		clearInterval(timer)
		change()
		timer = setInterval(change,3000)
		
	})
	function change(){
		_index++
		//console.log(_index)
		if(_index >= length){
			_index = -1;
		}
		$li.eq(_index).fadeIn(500).siblings().fadeOut(500)
		$a.eq(_index).css("background","#E5004A").siblings().css("background","#909090")
	}
	
	$(".sale_goods ul li").mouseenter(function(){
		$(this).children(".qianggou").css("opacity","1").children(".qianggou span").animate({"left":"14%"})
	})
	$(".sale_goods ul li").mouseleave(function(){
		$(this).children(".qianggou").css("opacity","0").children(".qianggou span").animate({"left":"-14%"})
	})


	var index = 0;
	
	function change1(){
		index++;
		$(".sale_goods ul").eq(index).css("marginTop","-300px")
	}
	var timer = setInterval(move,1000)
	function move(){
		
		var now = new Date();
		var y = now.getFullYear()
		var mon = now.getMonth()
		var da = now.getDate()
		var h = now.getHours()
	
		//console.log(h)
		if(8<=h&&h<10){
			index = 0;
		}else if(h<12){
			index = 1;
		}else if(h<14){
			index = 2;
		}else if(h<16){
			index = 3;
		}else if(h<18){
			index = 4;
		}else if(h<20){
			index = 5;
		}else if(h<22){
			index = 6;
		}else if(h<24){
			index = 7;
		}
		//console.log(index)
		$(".sale_goods ul").eq(index).css({"opacity":"1"},function(){
			
		})
		
		var m = now.getMinutes()
		var s = now.getSeconds()
		var ee =parseInt(($(".GetTodaySale").eq(index+1).html()).slice(0,2));
		var e = h*60*60*1000+m*60*1000+s*1000	
		if(index == 7){
			ee = 24
		}
		var e1 = ee*60*60*1000;
		var cha = e1-e;
		//console.log(e)
		//console.log(e1)
		//console.log(cha)
		//var tian = Math.floor(cha/1000/60/60/24);
		var hour = Math.floor(cha/1000/60/60)<10?'0'+Math.floor(cha/1000/60/60):Math.floor(cha/1000/60/60);
		var minute = Math.floor((cha/1000-hour*60*60)/60)<10?'0'+Math.floor((cha/1000-hour*60*60)/60):Math.floor((cha/1000-hour*60*60)/60);
		var second = Math.floor(cha/1000-hour*60*60-minute*60)<10?'0'+Math.floor(cha/1000-hour*60*60-minute*60):Math.floor(cha/1000-hour*60*60-minute*60);
		
		$(".GetTodaySale").eq(index).html("距结束")
		$(".time_tip").eq(index).animate({"opacity":"1","top":"-78px"},300).children("span").html("疯抢中")
		$(".time_tip").eq(index-1).animate({"opacity":"0","top":"-110px"})
		$(".time_point").eq(index).css({"border":"1px solid #fbac04"}).children().css("background","#fbac04")
		$(".GetTodaySale").eq(index).parent().siblings().children(".GetTodaySale").css("color","#ccc")
		
		
		$(".GetTodaySale").eq(index).parent().next().children(".GetTodaySale").css("color","#000")
		
		//鼠标移入移出
		$(".time_point").mouseenter(function(){
		$(this).parents("div").stop(true).siblings(".time_tip").animate({"top":"-78px","opacity":"1"},300)
	})
		$(".time_point").eq(index).mouseenter(function(){
			$(".time_tip").eq(index).stop(true).animate({"opacity":"1","top":"-78px"},300).children("span").html("疯抢中")
			$(".time_tip").eq(index-1).animate({"opacity":"0","top":"-110px"})
			$(".time_point").eq(index).css({"border":"1px solid #fbac04"}).children().css("background","#fbac04")
		})
		
		$(".time_point").mouseleave(function(){
		$(this).parents("div").siblings(".time_tip").stop(true).animate({"top":"-110px","opacity":"0"},300)
	})
		$(".time_point").eq(index).mouseleave(function(){
			$(".time_tip").eq(index).stop(true).animate({"opacity":"1","top":"-78px"},300).children("span").html("疯抢中")
			$(".time_tip").eq(index-1).animate({"opacity":"0","top":"-110px"})
			$(".time_point").eq(index).css({"border":"1px solid #fbac04"}).children().css("background","#fbac04")
		})
		//鼠标点击事件
		$(".time_tip").click(function(){
			
		})
		
		 $(".jtime").eq(index).css("opacity","1").html(hour + ':' + minute + ':' + second);
		if(cha < 0){
			change1();
		}
		$(".time_point").click(function(){
			
		})
		clearInterval(timer)
		timer = setInterval(move,1000)
	}
	
//	var h = now.getHours()
//	var m = now.getMinutes()
//	var s = now.getSeconds()
//	var now1 = h*3600000+m*60000+s*1000
//	var startT=new Date("2016/8/25 16:00:00").getTime()
//	var endT=new Date("64800000").getTime()
//	var startT=new Date("2016/8/25 16:00:00").getTime()
//	var endT=new Date("2016/8/25 18:00:00").getTime()
//	
//	
//	function aaa(){
//		
//		var time1 = new Alarm(now,endT,function (second, minute, hour, day) { //计时钟
//						$(".GetTodaySale").eq(4).html("距结束")
//						$(".time_tip").eq(4).animate({"top":"-78px","opacity":"1"},300).html("<span>16:00</span>疯抢中")
//                      $(".jtime").eq(4).css("opacity","1").html(hour + ':' + minute + ':' + second);
//                  }, function () { //倒计时结束
//                      $(".jtime").eq(4).html('00:00:00');
//                      setTimeout(function(){
//                      	endT=new Date("2016/8/25 20:00:00").getTime()
//                      	aaa()
//                      },0)
//                     
//                  })
//					time1.start();
//	}
//	aaa()

	//sale_con
	var endT = new Date("2016/09/07 00:00:00").getTime();
	//var enT1 = new Date("2016/09/07 00:00:00").getTime();
	setInterval(jieshu,1000)
	function jieshu(){
		var now = new Date().getTime();
		
		var cha = endT - now; 
		//console.log(now)
		//console.log(endT)
		//console.log(cha)
		var day = Math.floor(cha/24/60/60/1000)
		var hour = Math.floor((cha/1000-day*24*60*60)/60/60)<10?'0'+Math.floor((cha/1000-day*24*60*60)/60/60):Math.floor((cha/1000-day*24*60*60)/60/60);
		var minute = Math.floor((cha/1000-day*24*60*60-hour*60*60)/60)<10?'0'+Math.floor((cha/1000-day*24*60*60-hour*60*60)/60):Math.floor((cha/1000-day*24*60*60-hour*60*60)/60);
		var second = Math.floor(cha/1000-day*24*60*60-hour*60*60-minute*60)<10?'0'+Math.floor(cha/1000-day*24*60*60-hour*60*60-minute*60):Math.floor(cha/1000-day*24*60*60-hour*60*60-minute*60);
		$(".time_sale1 .day").html(day)
		$(".time_sale1 .hour").html(hour)
		$(".time_sale1 .minute").html(minute)
		$(".time_sale1 .second").html(second)
		
	}
	
	$(".sale_con ul li a").mouseenter(function(){	
//		$(this).children(".caption").children(".caption h2").animate({"opacity":"0","marginTop":"0px"},100,function(){
//			$(this).next("p").animate({"opacity":"0","marginTop":"0px"},100,function(){
//				$(this).parent(".caption").animate({"top":"177px"},1000,function(){
//					$(this).children("h2").css({"marginTop":"30px","opacity":"1"},function(){
//						$(this).next("p").css({"marginTop":"30px","opacity":"1"},function(){
//							$(this).animate({"marginTop":"-30px",},1000)
//						
//						})
//					})
//				})
//			})
//		})
		$(this).children(".caption").stop(true).animate({"top":"177px"},1000,function(){
			$(this).children(".caption h2").stop(true).animate({"marginTop":"0px"},1000)
			$(this).children(".caption p").stop(true).animate({"marginTop":"0px"},1000)
			
		})
	})
	$(".sale_con ul li a").mouseleave(function(){
		$(this).children(".caption").animate({"top":"256px"},1000)
	})
	
	
	setInterval(function(){
		$(".zhuan_bott ul").animate({"marginLeft":"-103px"},800,function(){
			$(".zhuan_bott ul li:first").appendTo($(".zhuan_bott ul"))
			$(".zhuan_bott ul").css({"marginLeft":"60px"})
		})
	},2000)
	
	$(".fl_left a img").mouseenter(function(){
		$(this).stop(true).animate({"width":"460px","height":"500px","margin":"-6px"},1000)
	})
	$(".fl_left  a img").mouseleave(function(){
		$(this).stop(true).animate({"width":"400px","height":"441px","margin":"0px"},1000)
	})
	$(".fl_ri  ul li img").mouseenter(function(){
		$(this).stop(true).animate({"marginLeft":"-20px"})
	})
	$(".fl_ri  ul li img").mouseleave(function(){
		$(this).stop(true).animate({"marginLeft":"0px"})
	})
	
	
	
	
})
//回到顶部
$(window).scroll(function(){
				if($(this).scrollTop() >= 2000){
					$(".return_top").fadeIn(100).css("z-index","2")
				}else{
					$(".return_top").fadeOut(100)
				}
			})
			$(function(){
				$(".return_top").click(function(){
					$("html,body").animate({
						"scrollTop":0
					})
				})
			})

/**
*startime 应该是毫秒数
*
*/

//var Alarm = function (startime, endtime, countFunc, endFunc) {
//      this.time = Math.floor((endtime - startime) / 1000); //时间
//      this.countFunc = countFunc; //计时函数
//      this.endFunc = endFunc; //结束函数
//      this.flag = 't' + Date.parse(new Date()); //
//  };
//Alarm.prototype.start = function () {
//  var self = this;
//
//  self.flag = setInterval(function () {
//      if (self.time < 0) {
//          clearInterval(self.flag);
//          self.endFunc();
//          console.log('计时结束');
//          
//      } else {
//
//          var minute, hour, day, second;
//          day = Math.floor(self.time / 60 / 60 / 24) < 10 ? '0' + Math.floor(self.time / 60 / 60 / 24) : Math.floor(self.time / 60 / 60 / 24);
//          hour = Math.floor(self.time / 60 / 60 % 24) < 10 ? '0' + Math.floor(self.time / 60 / 60 % 24) : Math.floor(self.time / 60 / 60 % 24);
//          minute = Math.floor(self.time / 60 % 60) < 10 ? '0' + Math.floor(self.time / 60 % 60) : Math.floor(self.time / 60 % 60);
//          second = Math.floor(self.time % 60) < 10 ? '0' + Math.floor(self.time % 60) : Math.floor(self.time % 60);
//          //倒计时执行函数
//          self.countFunc(second, minute, hour, day);
//          self.time--;
//
//      }
//  }, 1000);
//}