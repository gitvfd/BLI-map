							function updateCountryData(clickedCountry){

								svg2.selectAll("rect")
						            .remove();
								svg2.selectAll("text")
						            .remove();
								svg2.selectAll("g")
						            .remove();


						        var selectedAge = document.getElementById("age").value;
						        var selectedGender = document.getElementById("gender").value;
						        var selectedTopic = document.getElementById("Dimension").value;

						        var selectedCountry = clickedCountry;
						        document.getElementById("mousedOverBarRank").innerHTML =" ";
								document.getElementById("mousedOverBarTopic").innerHTML ="<br>";
						        //document.getElementById("mousedOverBarUsers").innerHTML ="<br>";

								d3.json("data/user_stat.json", function(error, data) {


			    				  svg2.append("g")
			    					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

								  var selectedData=data.filter(function(d) {
								  	  return(d.Gender==selectedGender && d.Age==selectedAge && d.Country==selectedCountry)});
								  
								  if(selectedData[0]!= undefined){
					                  var data2=[
					                  			{topic:"Housing",frequency:selectedData[0].Housing,rank:selectedData[0].Rank_of_Housing,number_Users:selectedData[0].number_Users},
							              		{topic:"Jobs",frequency:selectedData[0].Jobs,rank:selectedData[0].Rank_of_Jobs,number_Users:selectedData[0].number_Users},
							              		{topic:"Income",frequency:selectedData[0].Income,rank:selectedData[0].Rank_of_Income,number_Users:selectedData[0].number_Users},
							              		{topic:"Community",frequency:selectedData[0].Community,rank:selectedData[0].Rank_of_Community,number_Users:selectedData[0].number_Users},
							              		{topic:"Education",frequency:selectedData[0].Education,rank:selectedData[0].Rank_of_Education,number_Users:selectedData[0].number_Users},
							              		{topic:"Environment",frequency:selectedData[0].Environment,rank:selectedData[0].Rank_of_Environment,number_Users:selectedData[0].number_Users},
							              		{topic:"Civic Engagement",frequency:selectedData[0].Civic_Engagement,rank:selectedData[0].Rank_of_Civic_Engagement,number_Users:selectedData[0].number_Users},
							              		{topic:"Health",frequency:selectedData[0].Health,rank:selectedData[0].Rank_of_Health,number_Users:selectedData[0].number_Users},
							              		{topic:"Life Satisfaction",frequency:selectedData[0].Life_Satisfaction,rank:selectedData[0].Rank_of_Life_Satisfaction,number_Users:selectedData[0].number_Users},
							              		{topic:"Safety",frequency:selectedData[0].Safety,rank:selectedData[0].Rank_of_Safety,number_Users:selectedData[0].number_Users},
							              		{topic:"Work Life Balance",frequency:selectedData[0].Work_Life_Balance,rank:selectedData[0].Rank_of_Work_Life_Balance,number_Users:selectedData[0].number_Users}
					                  ];
				              	  }else{var data2=[];};

							
                        		  data2=data2.sort(function(a, b) { return a.frequency - b.frequency; });
								
								  var xValue = function(d) { return d.topic; }, 
								    xScale = d3.scale.ordinal().rangeRoundBands([0, width], .6), 
								    xMap = function(d) { return xScale(xValue(d)); }, 
								    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

					  			  xScale.domain(data2.map(xValue));

								  var yValue = function(d) { return d.frequency; },
								    yScale = d3.scale.linear().range([height, 0]), 
								    yMap = function(d) { return yScale(yValue(d)); }, // data -> display
								    yAxis = d3.svg.axis().scale(yScale).orient("left");//.tickFormat(formatPercent).tickSize(-width, 0,0);

								  yScale.domain([0, d3.max(data2.map(function(d) {return d.frequency}))]);

								  svg2.append("g")
								      .attr("class", "x axis")
								      .attr("transform", "translate(0," + height + ")")
								      .call(xAxis)
  									  .selectAll("text")
    								  .attr("y", 0)
    								  .attr("x", 9)
    								  .attr("dy", ".35em")
    								  .attr("transform", "rotate(45)")
    								  .style("text-anchor", "start");

								  svg2.append("g")
								      .attr("class", "y axis")
								      .call(yAxis);

								  var bar = svg2.selectAll(".bar")
								      .data(data2)
								      .enter().append("rect")
								      .attr("class", "bar")
								      .attr("x", xMap)
								      .attr("width", xScale.rangeBand)
								      .attr("y", yMap)
								      .attr("height", function(d) { return height - yScale(yValue(d)); })
								      .style("fill",function(d) { return color(d.topic);})
								      .style("opacity",0.85);
								


								  svg2.selectAll("rect")
								   .on("mouseover", function(d) {

										var mousedOverBarRank=d.rank;

										var mousedOverBarTopic=d.topic;

									    if(mousedOverBarRank==1)
									    	document.getElementById("mousedOverBarRank").innerHTML =mousedOverBarRank + "st out of 11 topics";

									    if(mousedOverBarRank==2)
									    	document.getElementById("mousedOverBarRank").innerHTML =mousedOverBarRank + "nd out of 11 topics";

										if(mousedOverBarRank==3)
									    	document.getElementById("mousedOverBarRank").innerHTML =mousedOverBarRank + "rd out of 11 topics";

									    if(mousedOverBarRank>3)
									    	document.getElementById("mousedOverBarRank").innerHTML =mousedOverBarRank + "th out of 11 topics";

									    document.getElementById("mousedOverBarTopic").innerHTML ="Rank of " + mousedOverBarTopic + ": ";


								      //Get this bar's x/y values, then augment for the tooltip
								      var xPosition = parseFloat(d3.select(this).attr("x")) +document.getElementById("area2").offsetLeft +70 ;
								      var yPosition = parseFloat(d3.select(this).attr("y")) +document.getElementById("area2").offsetTop;


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
								        .text(selectedCountry);

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
								      
									    document.getElementById("mousedOverBarRank").innerHTML =" ";
									    document.getElementById("mousedOverBarTopic").innerHTML ="<br>";

								      //Hide the tooltip
								      d3.select("#tooltipCountry").classed("hidden", true);
								    
								   });

								});

								function type(d) {
								  d.frequency = +d.frequency;
								  return d;
								}
							}

