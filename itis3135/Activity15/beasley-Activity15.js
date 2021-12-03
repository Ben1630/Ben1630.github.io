$(document).ready(function(){
		$.getJSON("facultyList.json", function(data) {
			$.each(data, function() {
				$.each(this, function(key, value) {
					$("#faculty").append(
					
					
					'<h2>' + 'Full Name: ' + value.full_name + '</h2>' + '<br>' +
					'<h3>' + 'First Name: ' + value.first_name + '</h3>' + '<br>' +
					'<img ' + 'src="' + value.image + '">' + '<br>' +
					'<h4>' + 'Department: ' + value.department + '</h4>' + '<br>' +
					'<p>' + 'Bio: ' + value.bio + '</p>' + '<br>'
					
					
					
					);
					
				});
				
			});
		
		});


});
