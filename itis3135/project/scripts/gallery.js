

$(document).ready( () => 
{
	$("#image_list a").click( evt =>
	{
		const link = evt.currentTarget;
		
		$("#mag").attr("src", link.href);
		
		$("#mag").attr("height", "400");
		
		$("#mag").attr("width", "800");
		
		evt.preventDefault();
		
		
	})
	
	
})