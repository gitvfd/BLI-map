							function compareCountry(){

								svg3.selectAll("circle")
						            .remove();
								svg3.selectAll("text")
						            .remove();
								svg3.selectAll("g")
						            .remove();


						        var selectedAge = document.getElementById("age2").value;
						        var selectedGender = document.getElementById("gender2").value;

						        var Country1 = document.getElementById("Country1").value;
						        var Country2 = document.getElementById("Country2").value;
						        document.getElementById("mousedOverCircleRank").innerHTML =" ";

								d3.json("data/user_stat.json", function(error, data) {


			    				  svg3.append("g")
			    					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

								  var selectedDataCountry=data.filter(function(d) {
								  	  return(d.Gender==selectedGender && d.Age==selectedAge && (d.Country==Country1||d.Country==Country2))});
								  
								  if(selectedDataCountry[0] == undefined){
								  	var dataCountry=[
				                  			{topic:"Housing",frequency:selectedDataCountry[1].Housing,rank:selectedDataCountry[1].Rank_of_Housing,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Jobs",frequency:selectedDataCountry[1].Jobs,rank:selectedDataCountry[1].Rank_of_Jobs,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Income",frequency:selectedDataCountry[1].Income,rank:selectedDataCountry[1].Rank_of_Income,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Community",frequency:selectedDataCountry[1].Community,rank:selectedDataCountry[1].Rank_of_Community,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Education",frequency:selectedDataCountry[1].Education,rank:selectedDataCountry[1].Rank_of_Education,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Environment",frequency:selectedDataCountry[1].Environment,rank:selectedDataCountry[1].Rank_of_Environment,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Civic Engagement",frequency:selectedDataCountry[1].Civic_Engagement,rank:selectedDataCountry[1].Rank_of_Civic_Engagement,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Health",frequency:selectedDataCountry[1].Health,rank:selectedDataCountry[1].Rank_of_Health,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Life Satisfaction",frequency:selectedDataCountry[1].Life_Satisfaction,rank:selectedDataCountry[1].Rank_of_Life_Satisfaction,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Safety",frequency:selectedDataCountry[1].Safety,rank:selectedDataCountry[1].Rank_of_Safety,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Work Life Balance",frequency:selectedDataCountry[1].Work_Life_Balance,rank:selectedDataCountry[1].Rank_of_Work_Life_Balance,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},

				                  ]
								  }else if(selectedDataCountry[1] == undefined){
								  	var dataCountry=[
				                  			{topic:"Housing",frequency:selectedDataCountry[0].Housing,rank:selectedDataCountry[0].Rank_of_Housing,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Jobs",frequency:selectedDataCountry[0].Jobs,rank:selectedDataCountry[0].Rank_of_Jobs,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Income",frequency:selectedDataCountry[0].Income,rank:selectedDataCountry[0].Rank_of_Income,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Community",frequency:selectedDataCountry[0].Community,rank:selectedDataCountry[0].Rank_of_Community,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Education",frequency:selectedDataCountry[0].Education,rank:selectedDataCountry[0].Rank_of_Education,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Environment",frequency:selectedDataCountry[0].Environment,rank:selectedDataCountry[0].Rank_of_Environment,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Civic Engagement",frequency:selectedDataCountry[0].Civic_Engagement,rank:selectedDataCountry[0].Rank_of_Civic_Engagement,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Health",frequency:selectedDataCountry[0].Health,rank:selectedDataCountry[0].Rank_of_Health,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Life Satisfaction",frequency:selectedDataCountry[0].Life_Satisfaction,rank:selectedDataCountry[0].Rank_of_Life_Satisfaction,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Safety",frequency:selectedDataCountry[0].Safety,rank:selectedDataCountry[0].Rank_of_Safety,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Work Life Balance",frequency:selectedDataCountry[0].Work_Life_Balance,rank:selectedDataCountry[0].Rank_of_Work_Life_Balance,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},

				                  ]
								  }else if(Country1==Country2){
				                  var dataCountry=[
				                  			{topic:"Housing",frequency:selectedDataCountry[0].Housing,rank:selectedDataCountry[0].Rank_of_Housing,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Jobs",frequency:selectedDataCountry[0].Jobs,rank:selectedDataCountry[0].Rank_of_Jobs,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Income",frequency:selectedDataCountry[0].Income,rank:selectedDataCountry[0].Rank_of_Income,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Community",frequency:selectedDataCountry[0].Community,rank:selectedDataCountry[0].Rank_of_Community,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Education",frequency:selectedDataCountry[0].Education,rank:selectedDataCountry[0].Rank_of_Education,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Environment",frequency:selectedDataCountry[0].Environment,rank:selectedDataCountry[0].Rank_of_Environment,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Civic Engagement",frequency:selectedDataCountry[0].Civic_Engagement,rank:selectedDataCountry[0].Rank_of_Civic_Engagement,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Health",frequency:selectedDataCountry[0].Health,rank:selectedDataCountry[0].Rank_of_Health,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Life Satisfaction",frequency:selectedDataCountry[0].Life_Satisfaction,rank:selectedDataCountry[0].Rank_of_Life_Satisfaction,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Safety",frequency:selectedDataCountry[0].Safety,rank:selectedDataCountry[0].Rank_of_Safety,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Work Life Balance",frequency:selectedDataCountry[0].Work_Life_Balance,rank:selectedDataCountry[0].Rank_of_Work_Life_Balance,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},

				                  ];
				                  }
				                  else if(Country1!=Country2){
				                  var dataCountry=[
				                  			{topic:"Housing",frequency:selectedDataCountry[0].Housing,rank:selectedDataCountry[0].Rank_of_Housing,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Jobs",frequency:selectedDataCountry[0].Jobs,rank:selectedDataCountry[0].Rank_of_Jobs,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Income",frequency:selectedDataCountry[0].Income,rank:selectedDataCountry[0].Rank_of_Income,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Community",frequency:selectedDataCountry[0].Community,rank:selectedDataCountry[0].Rank_of_Community,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Education",frequency:selectedDataCountry[0].Education,rank:selectedDataCountry[0].Rank_of_Education,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Environment",frequency:selectedDataCountry[0].Environment,rank:selectedDataCountry[0].Rank_of_Environment,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Civic Engagement",frequency:selectedDataCountry[0].Civic_Engagement,rank:selectedDataCountry[0].Rank_of_Civic_Engagement,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Health",frequency:selectedDataCountry[0].Health,rank:selectedDataCountry[0].Rank_of_Health,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Life Satisfaction",frequency:selectedDataCountry[0].Life_Satisfaction,rank:selectedDataCountry[0].Rank_of_Life_Satisfaction,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Safety",frequency:selectedDataCountry[0].Safety,rank:selectedDataCountry[0].Rank_of_Safety,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
						              		{topic:"Work Life Balance",frequency:selectedDataCountry[0].Work_Life_Balance,rank:selectedDataCountry[0].Rank_of_Work_Life_Balance,country:selectedDataCountry[0].Country,number_Users:selectedDataCountry[0].number_Users},
				                  			{topic:"Housing",frequency:selectedDataCountry[1].Housing,rank:selectedDataCountry[1].Rank_of_Housing,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Jobs",frequency:selectedDataCountry[1].Jobs,rank:selectedDataCountry[1].Rank_of_Jobs,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Income",frequency:selectedDataCountry[1].Income,rank:selectedDataCountry[1].Rank_of_Income,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Community",frequency:selectedDataCountry[1].Community,rank:selectedDataCountry[1].Rank_of_Community,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Education",frequency:selectedDataCountry[1].Education,rank:selectedDataCountry[1].Rank_of_Education,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Environment",frequency:selectedDataCountry[1].Environment,rank:selectedDataCountry[1].Rank_of_Environment,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Civic Engagement",frequency:selectedDataCountry[1].Civic_Engagement,rank:selectedDataCountry[1].Rank_of_Civic_Engagement,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Health",frequency:selectedDataCountry[1].Health,rank:selectedDataCountry[1].Rank_of_Health,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Life Satisfaction",frequency:selectedDataCountry[1].Life_Satisfaction,rank:selectedDataCountry[1].Rank_of_Life_Satisfaction,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Safety",frequency:selectedDataCountry[1].Safety,rank:selectedDataCountry[1].Rank_of_Safety,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users},
						              		{topic:"Work Life Balance",frequency:selectedDataCountry[1].Work_Life_Balance,rank:selectedDataCountry[1].Rank_of_Work_Life_Balance,country:selectedDataCountry[1].Country,number_Users:selectedDataCountry[1].number_Users}
				                  ];
				                  };


								  var xValue = function(d) { return d.topic; }, 
								    xScale = d3.scale.ordinal().rangeRoundBands([0, width], 1), 
								    xMap = function(d) { return xScale(xValue(d)); }, 
								    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

					  			  xScale.domain(dataCountry.map(xValue));

								  var yValue = function(d) { return d.frequency; },
								    yScale = d3.scale.linear().range([height, 0]), 
								    yMap = function(d) { return yScale(yValue(d)); }, // data -> display
								    yAxis = d3.svg.axis().scale(yScale).orient("left").tickFormat(formatPercent).tickSize(-width, 0,0);

								  yScale.domain([0,d3.max(dataCountry.map(function(d) {return d.frequency}))]);

								  svg3.append("g")
								      .attr("class", "x axis")
								      .attr("transform", "translate(0," + height + ")")
								      .call(xAxis)
  									  .selectAll("text")
    								  .attr("y", 0)
    								  .attr("x", 9)
    								  .attr("dy", ".35em")
    								  .attr("transform", "rotate(45)")
    								  .style("text-anchor", "start");

								  svg3.append("g")
								      .attr("class", "y axis")
								      .call(yAxis);

								  var circle = svg3.selectAll("circle")
								      .data(dataCountry)
								      .enter().append("circle")
            						  .attr('cx', xMap)
            						  .attr('cy', function(d) { return yScale(yValue(d)); })
            						  .attr('r',5)
								      .style("fill",function(d) { 
								      	if(d.country===Country1) 
								      		return "#FF0000";
								      	if(d.country===Country2) 
								      		return "#002078";
									  })
								      .style("opacity",1);
								


								  svg3.selectAll("circle")
								   .on("mouseover", function(d) {

										var mousedOverCircleRank=d.rank;

										var mousedOverCircleTopic=d.topic;

										var mousedOverCircleCountry=d.country;
									    if(mousedOverCircleRank==1) 
									    	document.getElementById("mousedOverCircleRank").innerHTML =mousedOverCircleRank + "st out of 11 topics";
									    if(mousedOverCircleRank==2) 
									    	document.getElementById("mousedOverCircleRank").innerHTML =mousedOverCircleRank + "nd out of 11 topics";
									    if(mousedOverCircleRank==3) 
									    	document.getElementById("mousedOverCircleRank").innerHTML =mousedOverCircleRank + "rd out of 11 topics";
									    if(mousedOverCircleRank>3) 
									    	document.getElementById("mousedOverCircleRank").innerHTML =mousedOverCircleRank + "th out of 11 topics";



								      //Get this bar's x/y values, then augment for the tooltip
								      var xPosition = parseFloat(d3.select(this).attr("cx")) +document.getElementById("area3").offsetLeft +70 ;
								      var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("area3").offsetTop +20 ;


								      //Update the tooltip position and value
								      d3.select("#tooltipCountry")
								        .style("left", xPosition + "px")
								        .style("top", yPosition + "px") 
								        .select("#genderCountry")
								        .text(function(){
								        	if(d.number_Users==1){
								        		if (selectedGender=="both")
								        			return d.number_Users+" user"
								        		if (selectedGender=="m")
								        			return d.number_Users+" man"
								        		if (selectedGender=="f")
								        			return d.number_Users+" woman"
											}else{
								        		if (selectedGender=="both")
								        			return d.number_Users+" users"
								        		if (selectedGender=="m")
								        			return d.number_Users+" men"
								        		if (selectedGender=="f")
								        			return d.number_Users+" women"
							        		}
								        });

								      d3.select("#tooltipCountry")
								        .select("#ageCountry")
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

								      d3.select("#tooltipCountry")
								        .select("#countryCountry")
								        .text(mousedOverCircleCountry);

								      d3.select("#tooltipCountry")
								        .select("#topicCountry")
								        .text(function(){
									      		return d.topic;
								        });

								      d3.select("#tooltipCountry")
								        .select("#valueCountry")
								        .text(function(){
									      		return formatPercent(d.frequency);
								        });

								     
								      //Show the tooltip
								      d3.select("#tooltipCountry").classed("hidden", false);

								   })
								   .on("mouseout", function() {
								      
									    document.getElementById("mousedOverCircleRank").innerHTML =" ";


								      //Hide the tooltip
								      d3.select("#tooltipCountry").classed("hidden", true);
								    
								   });

									//});

								});

								function type(d) {
								  d.frequency = +d.frequency;
								  return d;
								}
							}

