// JavaScript Document

$(document).ready(function(){
	
	$(window).bind("load resize", function(){
		re_win();
	});
	$(".planet").click(function(){
		var _index = $(this).index();
		//$(".b").eg(_index).fadeIn().siblings().fadeOut();
		var w = window.innerWidth;
		var width_s = w* _index* (-1);
		$(".box_a").animate({left:width_s},1000);
	});
	$("#no_text").click(function(){
		$('.left_text').toggle();
		$('.right_text').toggle();
	});
});

function re_win(){
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	$('.out').height(h);
	$('.out').width(w);
	$('.b').height(h);
	$('.b').width(w);
	$(".box_a").width(w*9);
};