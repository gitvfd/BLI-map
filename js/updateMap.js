							function updateData(clickedTopic){

				

								g.selectAll("circle")
						            .remove();

						        var selectedAge = document.getElementById("age").value;
						        var selectedGender = document.getElementById("gender").value;
						        
						        
						        var selectedTopic = clickedTopic;
						        if(selectedTopic== undefined)
						        	selectedTopic = document.getElementById("dimensionClicked").value;


									      	if(selectedTopic=="Housing")
									      		var renamedSelectedTopic="Housing";
									      	if(selectedTopic=="Jobs")
									      		var renamedSelectedTopic="Jobs";
									      	if(selectedTopic=="Income")
									      		var renamedSelectedTopic="Income";
									      	if(selectedTopic=="Community")
									      		var renamedSelectedTopic="Community";
									      	if(selectedTopic=="Education")
									      		var renamedSelectedTopic="Education";
									      	if(selectedTopic=="Environment")
									      		var renamedSelectedTopic="Environment";
									      	if(selectedTopic=="Civic_Engagement")
									      		var renamedSelectedTopic="Civic Engagement";
									      	if(selectedTopic=="Health")
									      		var renamedSelectedTopic="Health";
									      	if(selectedTopic=="Life_Satisfaction")
									      		var renamedSelectedTopic="Life Satisfaction";
									      	if(selectedTopic=="Safety")
									      		var renamedSelectedTopic="Safety";
									      	if(selectedTopic=="Work_Life_Balance")
									      		var renamedSelectedTopic="Work Life Balance";




								d3.json("data/user_stat.json", function(error,data){
									var selectedData=data.filter(function(d) {
								  	  return(d.Gender==selectedGender && d.Age==selectedAge)});
									if(selectedTopic=="Housing"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Housing);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Housing);} ));
	 								}
							      	if(selectedTopic=="Jobs"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Jobs);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Jobs);} ));
	 								}
							      	if(selectedTopic=="Income"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Income);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Income);} ));
	 								}
							      	if(selectedTopic=="Community"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Community);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Community);} ));
	 								}
							      	if(selectedTopic=="Education"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Education);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Education);} ));
	 								}
							      	if(selectedTopic=="Environment"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Environment);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Environment);} ));
	 								}
							      	if(selectedTopic=="Civic_Engagement"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Civic_Engagement);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Civic_Engagement);} ));
	 								}
							      	if(selectedTopic=="Health"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Health);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Health);} ));
	 								}
							      	if(selectedTopic=="Life_Satisfaction"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Life_Satisfaction);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Life_Satisfaction);} ));
	 								}
							      	if(selectedTopic=="Safety"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Safety);} ));
	 									 var max_value = d3.max(data.map(function(d) {return (d.Safety);} ));
	 								}
							      	if(selectedTopic=="Work_Life_Balance"){
	  									var min_value = d3.min(data.map(function(d) {return (d.Work_Life_Balance);} ));
	 									var max_value = d3.max(data.map(function(d) {return (d.Work_Life_Balance);} ));
	 								}
 
					 				var circle=g.selectAll("a.node")
									    .data(selectedData)
              							.enter().append("a")
              							.attr("class","nodes");
									    //.filter(function(d){return (d.Gender==selectedGender && d.Age==selectedAge);})
									 
									 circle.append("circle") 
									    .attr("cx", function(d) {
									      return projection([d.Longitude,d.Latitude])[0];
									    })
									    .attr("cy", function(d) {
									      return projection([d.Longitude,d.Latitude])[1];
									    })
									    .transition().duration(1000)
									    .attr("r",3.5)
									    .style("fill", function(d){
									    	if(document.getElementById("selectedCountry").innerHTML==d.Country){
									    		return "red"

									    	}else{

									    		return color(renamedSelectedTopic)
									    	}
										})
									    .style("opacity", function(d){
									    	if(document.getElementById("selectedCountry").innerHTML==d.Country)
									    		return 1

									    	else{
							      				if(selectedTopic=="Housing")
										      		return 0.5+(d.Housing-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Jobs")
										      		return 0.5+(d.Jobs-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Income")
										      		return 0.5+(d.Income-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Community")
										      		return 0.5+(d.Community-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Education")
										      		return 0.5+(d.Education-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Environment")
										      		return 0.5+(d.Environment-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Civic_Engagement")
										      		return 0.5+(d.Civic_Engagement-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Health")
										      		return 0.5+(d.Health-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Life_Satisfaction")
										      		return 0.5+(d.Life_Satisfaction-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Safety")
										      		return 0.5+(d.Safety-min_value)/(max_value-min_value);
										      	if(selectedTopic=="Work_Life_Balance")
										      		return 0.5+(d.Work_Life_Balance)/(max_value-min_value);
									    	}
									    		
									    });

									if(document.getElementById("selectedCountry").innerHTML!="")
										isThereAnyData(data);
									function isThereAnyData(data) {
										var selectedbarData=data.filter(function(d) {
								  	  		return(d.Gender==selectedGender && d.Age==selectedAge && d.Country==document.getElementById("selectedCountry").innerHTML)});
										console.log(selectedbarData);

										if (selectedbarData==""){
											//document.getElementById("selectedCountry").innerHTML="";
											document.getElementById("hideShowCountryName").style.visibility="hidden";
											document.getElementById("hideShowCountrySentence").style.visibility="hidden";
										}else{
											document.getElementById("hideShowCountryName").style.visibility="visible";
											document.getElementById("hideShowCountrySentence").style.visibility="visible";
											document.getElementById("hideShowCountrySentence").innerHTML="Topic ranking for users based in:";
										}		
									} ;



									g.selectAll("circle")
									   .on("mouseover", function(d) {


									      d3.select(this)
									        .transition()
									        .attr("r",10);

									      var mousedOverCountry=d.Country;
									      var mousedOverUsers=d.number_Users;

								      		if(selectedTopic=="Housing")
									      		var mousedOverRank=d.Rank_of_Housing;
									      	if(selectedTopic=="Jobs")
									      		var mousedOverRank=d.Rank_of_Jobs;
									      	if(selectedTopic=="Income")
									      		var mousedOverRank=d.Rank_of_Income;
									      	if(selectedTopic=="Community")
									      		var mousedOverRank=d.Rank_of_Community;
									      	if(selectedTopic=="Education")
									      		var mousedOverRank=d.Rank_of_Education;
									      	if(selectedTopic=="Environment")
									      		var mousedOverRank=d.Rank_of_Environment;
									      	if(selectedTopic=="Civic_Engagement")
									      		var mousedOverRank=d.Rank_of_Civic_Engagement;
									      	if(selectedTopic=="Health")
									      		var mousedOverRank=d.Rank_of_Health;
									      	if(selectedTopic=="Life_Satisfaction")
									      		var mousedOverRank=d.Rank_of_Life_Satisfaction;
									      	if(selectedTopic=="Safety")
									      		var mousedOverRank=d.Rank_of_Safety;
									      	if(selectedTopic=="Work_Life_Balance")
									      		var mousedOverRank=d.Rank_of_Work_Life_Balance;

									      
									      	if(selectedTopic=="Housing")
									      		var mousedOverValue=d3.round(d.Housing*100,2);
									      	if(selectedTopic=="Jobs")
									      		var mousedOverValue=d3.round(d.Jobs*100,2);
									      	if(selectedTopic=="Income")
									      		var mousedOverValue=d3.round(d.Income*100,2);
									      	if(selectedTopic=="Community")
									      		var mousedOverValue=d3.round(d.Community*100,2);
									      	if(selectedTopic=="Education")
									      		var mousedOverValue=d3.round(d.Education*100,2);
									      	if(selectedTopic=="Environment")
									      		var mousedOverValue=d3.round(d.Environment*100,2);
									      	if(selectedTopic=="Civic_Engagement")
									      		var mousedOverValue=d3.round(d.Civic_Engagement*100,2);
									      	if(selectedTopic=="Health")
									      		var mousedOverValue=d3.round(d.Health*100,2);
									      	if(selectedTopic=="Life_Satisfaction")
									      		var mousedOverValue=d3.round(d.Life_Satisfaction*100,2);
									      	if(selectedTopic=="Safety")
									      		var mousedOverValue=d3.round(d.Safety*100,2);
									      	if(selectedTopic=="Work_Life_Balance")
									      		var mousedOverValue=d3.round(d.Work_Life_Balance*100,2);



									      document.getElementById("mousedOverCountry").innerHTML ="Findings for "+mousedOverCountry + " are based on";
      
									      if(mousedOverUsers==1){
									      	document.getElementById("mousedOverUsers").innerHTML =mousedOverUsers+" index shared";
									  	  }else{
									      	document.getElementById("mousedOverUsers").innerHTML =mousedOverUsers+" indexes shared";
									      }

									      //Get this bar's x/y values, then augment for the tooltip
									      
									      var xPosition = parseFloat(d3.select(this).attr("cx"))+10+document.getElementById("area1").offsetLeft;
									      
									      var yPosition = parseFloat(d3.select(this).attr("cy"))+10+document.getElementById("area1").offsetTop  ;

									      //Update the tooltip position and value
									      d3.select("#tooltip")
									        .style("left", xPosition + "px")
									        .style("top", yPosition + "px") 
									        .select("#country")
									        .text(d.Country);

										  d3.select("#tooltip")
										    .select("#genderTooltip")
									        .text(function(){
									        	if(d.number_Users==1){
									        		if (selectedGender=="both")
									        			return /*d.number_Users+*/"A user"
									        		if (selectedGender=="m")
									        			return /*d.number_Users+*/"A man"
									        		if (selectedGender=="f")
									        			return /*d.number_Users+*/"A woman"
												}else{
									        		if (selectedGender=="both")
									        			return /*d.number_Users+*/"Users"
									        		if (selectedGender=="m")
									        			return /*d.number_Users+*/"Men"
									        		if (selectedGender=="f")
									        			return /*d.number_Users+*/"Women"
								        		}
									        });

									      d3.select("#tooltip")
									        .select("#ageTooltip")
									        .text(function(){
									        		if (selectedAge=="total")
									        			return ""
									        		if (selectedAge=="<15")
									        			return "aged < 15"
									        		if (selectedAge=="15-24")
									        			return "aged 15-24"
									        		if (selectedAge=="25-34")
									        			return "aged 25-34"
									        		if (selectedAge=="35-44")
									        			return "aged 35-44"
									        		if (selectedAge=="45-54")
									        			return "aged 45-54"
									        		if (selectedAge=="55-64")
									        			return "aged 55-64"
									        		if (selectedAge==">65")
									        			return "aged > 65"
									        });

									      d3.select("#tooltip")
									        .select("#topic")
									        .text(renamedSelectedTopic);

									      d3.select("#tooltip")
									        .select("#rank")
									        .text(function(){
										      	if(selectedTopic=="Housing"){
										      		if (d.Rank_of_Housing==1)
										      			return d.Rank_of_Housing+"st";
										      		if (d.Rank_of_Housing==2)
										      			return d.Rank_of_Housing+"nd";
										      		if (d.Rank_of_Housing==3)
										      			return d.Rank_of_Housing+"rd";
										      		if (d.Rank_of_Housing>3)
										      			return d.Rank_of_Housing+"th";
										      	}
										      	if(selectedTopic=="Jobs"){
										      		if (d.Rank_of_Jobs==1)
										      			return d.Rank_of_Jobs+"st";
										      		if (d.Rank_of_Jobs==2)
										      			return d.Rank_of_Jobs+"nd";
										      		if (d.Rank_of_Jobs==3)
										      			return d.Rank_of_Jobs+"rd";
										      		if (d.Rank_of_Jobs>3)
										      			return d.Rank_of_Jobs+"th";
										      	}
										      	if(selectedTopic=="Income"){
										      		if (d.Rank_of_Income==1)
										      			return d.Rank_of_Income+"st";
										      		if (d.Rank_of_Income==2)
										      			return d.Rank_of_Income+"nd";
										      		if (d.Rank_of_Income==3)
										      			return d.Rank_of_Income+"rd";
										      		if (d.Rank_of_Income>3)
										      			return d.Rank_of_Income+"th";
										      	}
										      	if(selectedTopic=="Community"){
										      		if (d.Rank_of_Community==1)
										      			return d.Rank_of_Community+"st";
										      		if (d.Rank_of_Community==2)
										      			return d.Rank_of_Community+"nd";
										      		if (d.Rank_of_Community==3)
										      			return d.Rank_of_Community+"rd";
										      		if (d.Rank_of_Community>3)
										      			return d.Rank_of_Community+"th";
										      	}
										      	if(selectedTopic=="Education"){
										      		if (d.Rank_of_Education==1)
										      			return d.Rank_of_Education+"st";
										      		if (d.Rank_of_Education==2)
										      			return d.Rank_of_Education+"nd";
										      		if (d.Rank_of_Education==3)
										      			return d.Rank_of_Education+"rd";
										      		if (d.Rank_of_Education>3)
										      			return d.Rank_of_Education+"th";
										      	}
										      	if(selectedTopic=="Environment"){
										      		if (d.Rank_of_Environment==1)
										      			return d.Rank_of_Environment+"st";
										      		if (d.Rank_of_Environment==2)
										      			return d.Rank_of_Environment+"nd";
										      		if (d.Rank_of_Environment==3)
										      			return d.Rank_of_Environment+"rd";
										      		if (d.Rank_of_Environment>3)
										      			return d.Rank_of_Environment+"th";
										      	}
										      	if(selectedTopic=="Civic_Engagement"){
										      		if (d.Rank_of_Civic_Engagement==1)
										      			return d.Rank_of_Civic_Engagement+"st";
										      		if (d.Rank_of_Civic_Engagement==2)
										      			return d.Rank_of_Civic_Engagement+"nd";
										      		if (d.Rank_of_Civic_Engagement==3)
										      			return d.Rank_of_Civic_Engagement+"rd";
										      		if (d.Rank_of_Civic_Engagement>3)
										      			return d.Rank_of_Civic_Engagement+"th";
										      	}
										      	if(selectedTopic=="Health"){
										      		if (d.Rank_of_Health==1)
										      			return d.Rank_of_Health+"st";
										      		if (d.Rank_of_Health==2)
										      			return d.Rank_of_Health+"nd";
										      		if (d.Rank_of_Health==3)
										      			return d.Rank_of_Health+"rd";
										      		if (d.Rank_of_Health>3)
										      			return d.Rank_of_Health+"th";
										      	}
										      	if(selectedTopic=="Life_Satisfaction"){
										      		if (d.Rank_of_Life_Satisfaction==1)
										      			return d.Rank_of_Life_Satisfaction+"st";
										      		if (d.Rank_of_Life_Satisfaction==2)
										      			return d.Rank_of_Life_Satisfaction+"nd";
										      		if (d.Rank_of_Life_Satisfaction==3)
										      			return d.Rank_of_Life_Satisfaction+"rd";
										      		if (d.Rank_of_Life_Satisfaction>3)
										      			return d.Rank_of_Life_Satisfaction+"th";
										      	}
										      	if(selectedTopic=="Safety"){
										      		if (d.Rank_of_Safety==1)
										      			return d.Rank_of_Safety+"st";
										      		if (d.Rank_of_Safety==2)
										      			return d.Rank_of_Safety+"nd";
										      		if (d.Rank_of_Safety==3)
										      			return d.Rank_of_Safety+"rd";
										      		if (d.Rank_of_Safety>3)
										      			return d.Rank_of_Safety+"th";
										      	}
										      	if(selectedTopic=="Work_Life_Balance"){
										      		if (d.Rank_of_Work_Life_Balance==1)
										      			return d.Rank_of_Work_Life_Balance+"st";
										      		if (d.Rank_of_Work_Life_Balance==2)
										      			return d.Rank_of_Work_Life_Balance+"nd";
										      		if (d.Rank_of_Work_Life_Balance==3)
										      			return d.Rank_of_Work_Life_Balance+"rd";
										      		if (d.Rank_of_Work_Life_Balance>3)
										      			return d.Rank_of_Work_Life_Balance+"th";
										      	}
									        });

									     
									      //Show the tooltip
									      d3.select("#tooltip").classed("hidden", false);

									   })
									   .on("mouseout", function() {

									      document.getElementById("mousedOverCountry").innerHTML ="";

									      document.getElementById("mousedOverUsers").innerHTML ="";

										   	d3.select(this)
										   		.transition()
										        .attr("r",3.5);
									      //Hide the tooltip
									      d3.select("#tooltip").classed("hidden", true);
									    
									   })

									g.selectAll("circle")
									    .on("click",function (d){
									    	
											document.getElementById("hideShowCountrySentence").style.visibility="visible";
											document.getElementById("hideShowCountryName").style.visibility="visible";
									    	var clickedCountry=d.Country;

											document.getElementById("hideShowCountrySentence").innerHTML="Topic ranking for users based in:";
									        document.getElementById("selectedCountry").innerHTML =clickedCountry;

									    	updateCountryData(d.Country);
											d3.selectAll("circle")
									    		.style("fill", color(renamedSelectedTopic))
									    		.style("opacity", 0.75);
									    	
									    	d3.select(this)
									        .style("fill","red")
									        .style("opacity",1);

									        bottom();

									    })
								});
							};

							function bottom() {
    							document.getElementById( 'area2' ).scrollIntoView();
    							//window.setTimeout( function () { top(); }, 2000 );
							};