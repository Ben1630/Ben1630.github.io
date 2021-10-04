
//Gets the number from the user

var sides = prompt("The Bold Baboon wants you to choose the number of sides for a polygon:");

//Calls the validate function

validateEntry(sides);

//Checks to see if the number is between 0 and 10
function validateEntry(sides)
{
	//Checks if sides isNaN
	
	if(!isNaN(sides))
	{
		sides = Math.round(parseFloat(sides));
	}
	
	//Loops until correct input is given
	
	while(sides < 0 || sides > 10 || isNaN(sides))
	{
		sides = prompt("No! The Bold Baboon wishes for a number between 0 and 10:");
		sides = Math.round(parseFloat(sides));
	}
	
	//Calls the getShape function
	getShape(sides);
}





//Function checks the sides and outputs the cooresponding shape

function getShape(sides)
{
	if(sides == '0')
	{
		alert("You have nothing!");
	}
	
	else if(sides == '1')
	{
		alert("Monogon");
	}
	
	else if(sides == '2')
	{
		alert("Bigon");
	}
	
	else if(sides == '3')
	{
		alert("Trigon");
	}
	
	else if(sides == '4')
	{
		alert("Tetragon");
	}
	
	else if(sides == '5')
	{
		alert("Pentagon");
	}
	
	else if(sides == '6')
	{
		alert("Hexagon");
	}
	
	else if(sides == '7')
	{
		alert("Heptagon");
	}
	
	else if(sides == '8')
	{
		alert("Octagon");
	}
	
	else if(sides == '9')
	{
		alert("Nonagon");
	}
	
	else
	{
		alert("Decagon");
	}
	
}


