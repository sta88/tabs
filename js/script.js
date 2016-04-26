// "use strict"

// document.addEventListener('DOMContentLoaded', function(){

	// var tabs = document.getElementsByClassName('tabs');

	// tabs.addEventListener( "click" , function(event) {
	// 	var elem = event.target;
	// 	console.log(elem);
	// });
	// $(function() {
	// 	$('.tabs li').click(function() {
	// 		part = $(this).find('span').attr('rel');
	// 		$(this).addClass('active').siblings().removeClass('active');
	// 		var imgAbout = $('#'+part);
	// 		imgAbout.addClass('active').siblings().removeClass('active');
	// 	}); 
	// });
// });


(function() {
	'use strict';

	var foo = function() {
		var tabs = document.getElementsByClassName('tabs')[0];

		tabs.addEventListener( "click" , function(event) {
			var elem = event.target,
				activeTab = document.querySelector('.tabs .active'),
				activeContent = document.querySelector('.item.active'),
				elemAttr = elem.getAttribute('rel');

			activeTab.classList.remove('active');
			activeContent.classList.remove('active');

			elem.parentElement.classList.add('active');
			document.getElementById(elemAttr).classList.add('active');


		});


	}; 

	window.onload = foo; 
})();