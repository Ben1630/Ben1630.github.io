

$(document).ready( () => 
{
	$("#image_list a").click( evt =>
	{
		const link = evt.currentTarget;
		
		$("#mag").attr("src", link.href);
		
		$("#mag").attr("height", "400px");
		
		$("#mag").attr("width", "800px");
		
		evt.preventDefault();
		
		
	})
	
	
})