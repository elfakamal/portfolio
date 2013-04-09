var width = 960,
    height = 500,
    twoPi = 2 * Math.PI,
    progress = .69,
    total = 1308573, // must be hard-coded if server doesn't report Content-Length
    formatPercent = d3.format(".0%"),
	innerRadius = 30,
	outerRadius = 50,
	horizontalPadding = 50,
	verticalPadding = 20;

var skills = [
	{
		name			: "Photoshop",
		weight			: .8,
		customClasses	: "skill-1",
		coordinates		: {x: 50, y: 50},
		duration		: 500
	},
	{
		name			: "Illustrator",
		weight			: .2,
		customClasses	: "skill-2",
		coordinates		: {x: 120, y: 150},
		duration		: 1000
	},
	{
		name			: "InDesign",
		weight			: .8,
		customClasses	: "skill-3",
		coordinates		: {x: 300, y: 250},
		duration		: 300
	},
	{
		name			: "HTML5",
		weight			: .6,
		customClasses	: "skill-4",
		coordinates		: {x: 200, y: 150},
		duration		: 2000
	}
];


var skillsSVG = d3.select("#div-skills-viz")
	.append("svg")
	.attr("width", "100%")
	.attr("height", "100%");
//	.style("background-color", "#2F2F2F");


//foreground
var arc = d3.svg.arc()
	.startAngle(0)
    .endAngle(function(d)
	{
		return d.weight * twoPi;
	})
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

//background
var arc2 = d3.svg.arc()
	.startAngle(0)
    .endAngle(twoPi)
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);


var pieBases = skillsSVG.selectAll("g")
	.data(skills)
	.enter()
	.append("g")
	.attr("class", function(d)
	{
		var classes = "progress-meter";

		if( d.customClasses != "" )
		{
			classes += " " + d.customClasses;
		}

		return classes;
	});
//	.attr("transform", function(d, i)
//	{
//		var x = outerRadius * 2 + (outerRadius * 2 + horizontalPadding) * i;
//		var y = outerRadius * 2;
//
//		return "translate(" + x + "," + y + ")";
//	});

pieBases.append("path")
    .attr("class", "background")
    .attr("d", arc2)
	.attr("transform", "scale(0)")
	.transition()
	.duration(1000)
	.attr("transform", "scale(1)");


var pieForegrounds = pieBases.append("path")
    .attr("class", "foreground")
	.transition()
	.delay(1000)
	.duration(function(d)
	{
		return d.duration;
	})
	.attrTween("d", pieTween);


var percentTexts = pieBases.append("text")
    .attr("text-anchor", "middle")
    .attr("dy", ".35em")
	.attr("fill", "lightgray");


function pieTween(d, i)
{
	var myInterpolation = d3.interpolate({weight:.0}, {weight: d.weight});

	return function(t)
	{
		var progressEnd = myInterpolation(t);
		var myTexts = d3.selectAll("text");
		d3.select(myTexts[0][i]).text(formatPercent(progressEnd.weight));
		return arc(progressEnd);
	}
}










