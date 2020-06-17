/*
* @Author: Administrator
* @Date:   2018-07-13 10:28:35
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-13 14:42:48
*/
//入口函数
$(function(){
	//淡入 fadeIn()
	//淡出 fadeOut()
	//事件源+注册事件=事件处理程序
	//btn.onclick=function(){}  原生
	//$(btn).事件名(事件处理程序)  jq
	//分析出事件源是左右按钮
	//1.获取左右按钮
	var leftArrow=$("#arrowLeft");
	var rightArrow=$("#arrowRight");
	//2.获取变化的元素 图片 小横杠
	var lis=$("#carousel li");
	var dotts=$("#dott li");
	//声明一个全局的索引，来控制图片的消失和显示
	var index=0;
	leftArrow.click(leftClick);
	rightArrow.click(rightClick);
	//提高代码的可复用性
	function leftClick(){
		if(index==0){
			index=3;
		}		 
		index--;
		lis.eq(index).fadeIn(500).siblings().fadeOut(500);
		dotts.eq(index).addClass('active').siblings().removeClass('active');
	}
	function rightClick(){
		if(index==2){
			index=-1;
		}		 
		index++;
		lis.eq(index).fadeIn(500).siblings().fadeOut(500);
		dotts.eq(index).addClass('active').siblings().removeClass('active');
	}
	//给小横杠添加函数
	dotts.mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		index=$(this).index();
		lis.eq(index).fadeIn(500).siblings().fadeOut(500);
	})

	//开启自动轮播
	var timeId=setInterval(leftClick, 1000);
	//鼠标移入广告区，停止自动轮播
	$("#banner").mouseover(function(){
		clearInterval(timeId);
	});
	$("#banner").mouseout(function(){
		timeId=setInterval(leftClick, 1000);
	});
})
