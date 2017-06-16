
$(function(){
	
	/*左侧栏目 点击展开*/
	$(".sidebar-nav li h3").click(function(){
		$(this).toggleClass("currentDd").siblings(".navContent").removeClass("currentDd");
		$(this).toggleClass("currentDt").siblings(".navContent").removeClass("currentDt");
		$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500) 
	})	
	
	/*左侧客服 显示隐藏*/
	$(".switch").click(function(){
	  	$(this).toggleClass("zs-show").siblings(".service").removeClass("zt-hide");
		$(this).toggleClass("zs-hide").siblings(".service").removeClass("zs-show");
	    $(".service").slideToggle(300);
	});
	
	/*订单生成报价*/
	$(".mx").click(function(){
		$(this).toggleClass("currentDd").siblings(".ml-line").removeClass("currentDd");
		$(this).toggleClass("currentDt").siblings(".ml-line").removeClass("currentDt");
		$(this).next(".ml-line").slideToggle(300).siblings(".ml-line").slideUp(500) 
	})	
	
	/*发票选择*/
	$('.chooseIco').click(function(){
		$(this).addClass('over').parent('li').siblings().find('.over').removeClass('over')
	});
	
	//普通发票
	$('.pt-invoiceBtn').click(function(){
		$('.commercial-invoice-up').css('opacity','0').animate({opacity:'1'},300).show();
		$('.bounced-bg').animate({opacity:'0.5'},500).show();
	})
	$('.close,.bounced-bg').click(function(){
		$('.commercial-invoice-up').hide();
		$('.bounced-bg').hide();
	})
	
	//增值发票
	$('.zj-invoiceBtn').click(function(){
		$('.increase-invoice-up').css('opacity','0').animate({opacity:'1'},300).show();
		$('.bounced-bg').css('opacity','0').animate({opacity:'0.5'},500).show();
	})
	$('.close,.bounced-bg').click(function(){
		$('.increase-invoice-up').hide();
		$('.bounced-bg').hide();
	})
	
	//地址管理
	$('.addressBtn').click(function(){
		$('.address-management-up').css('opacity','0').animate({opacity:'1'},300).show();
		$('.bounced-bg').css('opacity','0').animate({opacity:'0.5'},500).show();
	})
	$('.close,.bounced-bg').click(function(){
		$('.address-management-up').hide();
		$('.bounced-bg').hide();
	})
	
	//合并发货
	$('.combined-shipping-btn').click(function(){
		$('.combined-shipping-up').css('opacity','0').animate({opacity:'1'},300).show();
		$('.bounced-bg').css('opacity','0').animate({opacity:'0.5'},500).show();
	})
	$('.close').click(function(){
		$('.combined-shipping-up').hide();
		$('.bounced-bg').hide();
	})
	
//	/*右侧总金额 滑动*/
//     $(window).scroll(function(){ 
//         var t=document.documentElement.scrollTop||document.body.scrollTop;  
//         var membernav=document.getElementById("sc-offer"); 
//         if(t>= 135){ 
//             membernav.className = "member-right-sroll";
//         }else{
//             membernav.className = "membernav";
//         } 
//     })
    
    /*板子层数弹框*/
	$('.layer-btn').click(function(){
		$('.order-layer-up').css('opacity','0').animate({opacity:'1'},300).show();
		$('.bounced-bg').css('opacity','0').animate({opacity:'0.5'},300).show();
	})
	$('.close,.bounced-bg').click(function(){
		$('.order-layer-up').hide();
		$('.bounced-bg').hide();
	})
	
})
