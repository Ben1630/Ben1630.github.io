
//Creates Empty Arrays

let person = [];
let salaries = [];

//Functions tied to button click events

function addClick()
{
	
	
}

function displayResultsClick()
{
	var avg = 0;
	var max = 0;
	for(var i = 0; i < salaries.length;i++)
	{
		avg += salaries[i];
		
		if(salaries[i] > max)
		{
			max = salaries[i];
		}
	}
	avg = avg / salaries.length;
	
	
	
	document.getElementById("header").innerHTML = "The results:";
	
	
	document.getElementById("average").innerHTML = "Average: " + avg;


	document.getElementById("max").innerHTML = "The highest salary: " + max;
	
	
	
}

function displaySalaryClick()
{
	
	const table = document.getElementById("results_table");
	
	table.insertRow();
	row.insertCell(0);
	
	
	
}