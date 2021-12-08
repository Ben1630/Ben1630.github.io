$(document).ready(function(){
		$.getJSON("blogData.json", function(data) {
			$.each(data, function() {
				$.each(this, function(key, value) {
					$("#blog").append(
					
					'<p>' + value.content + '</p>' + '<br>'
					
					
					
					);
					
				});
				
			});
		
		});


});
