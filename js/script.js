(function() {
	'use strict';

	var foo = function() {
		var tabs = document.getElementById('tabs'),
			tabsContent = document.getElementById('tabs-content');


		tabs.addEventListener( "click" , function(event) {
			var elem = event.target,
				activeTab = tabs.querySelector('.active'),
				activeContent = tabsContent.querySelector('.active'),
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