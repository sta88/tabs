(function() {
	'use strict';

	var foo = function() {
		var tabs = document.getElementsByClassName('tabs')[0];

		tabs.addEventListener( "click" , function(event) {
			var elem = event.target,
				activeTab = document.querySelector('.tabs .active'),
				activeContent = document.querySelector('.item.active'),
				elemAttr = elem.getAttribute('rel');

			if(elem.nodeName.toLowerCase() == 'li'){
				elem = elem.querySelector('span');
				elemAttr = elem.getAttribute('rel');
			}
			activeTab.classList.remove('active');
			activeContent.classList.remove('active');

			elem.parentElement.classList.add('active');
			document.getElementById(elemAttr).classList.add('active');
		});
	}; 
	window.onload = foo; 
})();