

$(document).ready( () => 
{
	$("#image_list a").click( evt =>
	{
		const link = evt.currentTarget;
		
		$("#image").attr("src", link.href);
		
		$("#image").attr("height", "400");
		
		$("#image").attr("width", "800");
		
		evt.preventDefault();
		
		
	})
	
	
})