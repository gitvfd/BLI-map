function updateDimensionName(dimensionName){
	document.getElementById("dimensionClicked").value = dimensionName;
	
	if (dimensionName == "Housing")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/housing/\" target=\"_blank\">Housing</a></b> is based on your housing conditions and spending";

	if (dimensionName == "Income")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/income/\" target=\"_blank\">Income</a></b> is based on your household income and financial wealth"; 

	if (dimensionName == "Jobs")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/jobs/\" target=\"_blank\">Jobs</a></b> is based on earnings, job security and unemployment"; 

	if (dimensionName == "Community")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/community/\" target=\"_blank\">Community</a></b> is based on the quality of your social support network"; 

	if (dimensionName == "Education")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/education/\" target=\"_blank\">Education</a></b> is based on your education and what you get out of it"; 

	if (dimensionName == "Environment")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/environment/\" target=\"_blank\">Environment</a></b> is based on the quality of your environment"; 

	if (dimensionName == "Civic_Engagement")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/civic-engagement/\" target=\"_blank\">Civic Engagement</a></b> is based on your involvement in democracy"; 

	if (dimensionName == "Health")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/health/\" target=\"_blank\">Health</a></b> is based on how healthy you are"; 

	if (dimensionName == "Life_Satisfaction")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/life-satisfaction/\" target=\"_blank\">Life Satisfaction</a></b> is based on how happy you are"; 

	if (dimensionName == "Safety")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/safety/\" target=\"_blank\">Safety</a></b> is based on murder and assault rates"; 

	if (dimensionName == "Work_Life_Balance")
		document.getElementById("dimensionClicked").innerHTML= "<b><a href=\"http://www.oecdbetterlifeindex.org/topics/work-life-balance/\" target=\"_blank\">Work-Life Balance</a></b> is based on how much you work, how much you play";  
 
}	