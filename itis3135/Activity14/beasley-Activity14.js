$(document).ready(function() {
	
}); // end ready


$("#nav_list a toobin").click(function()

{
	
	$.getJSON("toobin.json", function(data) {
			$.each(this, function(key, value) {
					function change(){
				document.getElementById("#m1").innerHTML = value.month;
				
				document.getElementById("#m2").innerHTML = value.title;
				
				document.getElementById("#m3").innerHTML = value.speaker;
				
				document.getElementById("#m4").src = value.image;
				
				document.getElementById("#m5").innerHTML = value.text;
					}
					
					
				});
				
			});
		
	
	
});


$("#nav_list a sorkin").click(function()

{
	
	
	$.getJSON("sorkin.json", function(data) {
				$.each(this, function(key, value) {
					function change(){
				document.getElementById("#m1").innerHTML = value.month;
				
				document.getElementById("#m2").innerHTML = value.title;
				
				document.getElementById("#m3").innerHTML = value.speaker;
				
				document.getElementById("#m4").src = value.image;
				
				document.getElementById("#m5").innerHTML = value.text;
					}
					
				});
				
			});
		
	
	
});

$("#nav_list a chua").click(function()

{
	
	
	$.getJSON("chua.json", function(data) {
			
				$.each(this, function(key, value) {
					function change(){
				document.getElementById("#m1").innerHTML = value.month;
				
				document.getElementById("#m2").innerHTML = value.title;
				
				document.getElementById("#m3").innerHTML = value.speaker;
				
				document.getElementById("#m4").src = value.image;
				
				document.getElementById("#m5").innerHTML = value.text;
					}
					
				});
				
			});
		
		
	
});

$("#nav_list a sampson").click(function()

{

	
	$.getJSON("sampson.json", function(data) {
			$.each(this, function(key, value) {
					function change(){
				document.getElementById("m1").innerHTML = value.month;
				
				document.getElementById("m2").innerHTML = value.title;
				
				document.getElementById("m3").innerHTML = value.speaker;
				
				document.getElementById("m4").src = value.image;
				
				document.getElementById("m5").innerHTML = value.text;
					}
					
				});
				
			});
		
		
	
});