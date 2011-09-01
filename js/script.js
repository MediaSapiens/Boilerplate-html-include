jQuery(document).ready(function($){  
	var _getContainer = $('#loadContent').hide();
	var _content = $('#main');
	
	includeHtml(_getContainer,'inc/header.html',_getContainer,'before');
	includeHtml(_getContainer,'inc/main.html',_getContainer,'before');
	includeHtml(_getContainer,'inc/footer.html',_getContainer,'after');
	    
	//console.log(_content);

}); 





