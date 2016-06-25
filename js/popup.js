$(function() {
	$('#go').on('click', function(){
		chrome.tabs.create({ url: "https://docs.expressionengine.com/search/latest/?q="+$('#search').val() });
	});
	
	   $('#search').keypress(function(e){
        if(e.which == 13){
            $('#go').click();
        }
    });
});
