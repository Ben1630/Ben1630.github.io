$("#submission").submit( event => {
	let isValid = true;
	
	
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	const email = $("#email").val().trim();
	
	if(!emailPattern.test(email))
	{
		$("#email").next().text("Must be a valid email address.")
		isValid = false;
	}

	
	$("#email").val(email);
	
	if (isValid == false)
	{
		event.preventDefault();
		
	}
	
	else
	{
		
		Alert($("#name").val()    +    $("#number").val()    +   $("#email").val()    + $("#complaint").val());
		
	}
	
		
	
});