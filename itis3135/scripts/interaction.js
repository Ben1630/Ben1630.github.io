
//Gets username and mood
var userName = prompt("Please enter your name:");
var userMood = prompt("How are you doing?");


//sets date and outputs messages
var today = new Date();
document.write("Today is " + (today.getMonth()+1) + ", " + today.getDate() + ", and the time is " + today.getHours() + ":" + today.getMinutes() + "." );

document.write("The Bold Baboon welcomes you, " + userName + "! We're glad you are doing " + userMood + "!");


//Button events

function orderClick()
{
	alert("Papers are on the way!");
}

function additionClick()
{
	alert(9 + 10);
}

function companyClick()
{
	alert("We've been in operation since 1985!");
}

function shipClick()
{
	alert("All over the world!");
}

function pageClick()
{
	alert("Bold Baboon Inc!");
}
