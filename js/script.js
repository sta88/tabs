(function() {
	'use strict';

	var foo = function() {
		var tabs = document.getElementById('tabs');

		tabs.addEventListener( "click" , function(event) {
			var elem = event.target,
				activeTab = document.querySelector('.tabs .active'),
				activeContent = document.querySelector('.item.active'),
				elemAttr = elem.dataset.rel;

			if(elem.nodeName.toLowerCase() == 'li'){
				return false;
			}
			activeTab.classList.remove('active');
			activeContent.classList.remove('active');

			elem.parentElement.classList.add('active');
			document.getElementById(elemAttr).classList.add('active');
		});
	}; 
	window.onload = foo; 
})();