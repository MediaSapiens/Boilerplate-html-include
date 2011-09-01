jQuery(document).ready(function($){  
	var _getContainer = $('#loadContent').hide();
	var _content = $('#main');
	function includeHtml(container,url,content, insert){
		$(container).html('');
		$(container).load(url, function(data) {
			if (insert == 'after'){
				$(content).after(data);
			}else{
				$(content).before(data);
			}
		});		
	}
	
	
	
	includeHtml(_getContainer,'inc/header.html',_getContainer,'before');
		includeHtml(_getContainer,'inc/main.html',_getContainer,'before');
	includeHtml(_getContainer,'inc/footer.html',_getContainer,'after');
	    
	//console.log(_content);

}); 





