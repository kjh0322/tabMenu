$(document).ready(function(){		//$(function(){
		
	//초기값 설정
	$(".box").hide();		//숨기기 slideUp(), fadeOut()
	$("#cafe").show();		//보이기 slideDown(), fadeIn()
	
	var n=1;
	$(".count").html("<b>"+n+"</b> / 4");
	
	//오른쪽 버튼 클릭시(.nextBtn)
	$(".nextBtn").click(function(){
		n++;
		if(n==1){
			tabMenu1();
		}else if(n==2){
			tabMenu2()
		}else if(n==3){
			tabMenu3();
		}else if(n==4){
			tabMenu4();
		}else{
			n=1;
			tabMenu1();
		}
	});
	
	
	//왼쪽 버튼 클릭시(.prevBtn)
	$(".prevBtn").click(function(){
		n--;
		if(n==1){
			tabMenu1();
		}else if(n==2){
			tabMenu2()
		}else if(n==3){
			tabMenu3();
		}else if(n==4){
			tabMenu4();
		}else{
			n=4;
			tabMenu4();
		}
	});
	
	
	//tabMenu1~4까지 함수 생성
	function tabMenu1(){
		$(".box").hide();
		$("#cafe").show(500);
		$(".tabNavi ul li").removeClass("on");
		$(".tabNavi ul li:nth-child(1)").addClass("on") 
		n=1;
		$(".count").html("<b>"+n+"</b> / 4");
	}
	
	function tabMenu2(){
		$(".box").slideUp();
		$("#brunch").slideDown(300);
		$(".tabNavi ul li").removeClass("on");
		$(".tabNavi ul li:nth-child(2)").addClass("on")
		n=2;
		$(".count").html("<b>"+n+"</b> / 4");
	}

	function tabMenu3(){
		$(".box").fadeOut();
		$("#tistory").fadeIn(300);
		$(".tabNavi ul li").removeClass("on");	
		$(".tabNavi ul li:nth-child(3)").addClass("on")
		n=3;
		$(".count").html("<b>"+n+"</b> / 4");
	}
	
	function tabMenu4(){
		$(".box").slideUp();
		$("#kakaostory").slideDown(500);
		$(".tabNavi ul li").removeClass("on")
		$(".tabNavi ul li:nth-child(4)").addClass("on")
		n=4;
		$(".count").html("<b>"+n+"</b> / 4");
	}
	
	
	//tabMenu 클릭시 해당내용 보이기
	$(".tabNavi ul li:nth-child(1) a").click(function(){
		tabMenu1();
	});
	
	$(".tabNavi ul li:nth-child(2) a").click(function(){
		tabMenu2();
	});
	
	$(".tabNavi ul li:nth-child(3) a").click(function(){
		tabMenu3();
	});
	
	$(".tabNavi ul li:nth-child(4) a").click(function(){
		tabMenu4();
	});
	
});