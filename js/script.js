"use strict"

document.addEventListener('DOMContentLoaded', function(){

	var tabs = document.getElementsByClassName('tabs');

	tabs.addEventListener( "click" , function(event) {
		var elem = event.target;
		console.log(elem);
	});
	// $(function() {
	// 	$('.tabs li').click(function() {
	// 		part = $(this).find('span').attr('rel');
	// 		$(this).addClass('active').siblings().removeClass('active');
	// 		var imgAbout = $('#'+part);
	// 		imgAbout.addClass('active').siblings().removeClass('active');
	// 	}); 
	// });
});