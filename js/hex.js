
var skills = [
	{
		name			: "Photoshop",
		weight			: .8,
		customClasses	: "skill-1",
		duration		: 500
	},
	{
		name			: "Illustrator",
		weight			: .2,
		customClasses	: "skill-2",
		duration		: 1000
	},
	{
		name			: "InDesign",
		weight			: .8,
		customClasses	: "skill-3",
		duration		: 300
	},
	{
		name			: "HTML5",
		weight			: .6,
		customClasses	: "skill-4",
		duration		: 2000
	}
];



var margin = {top: 20, right: 20, bottom: 30, left: 40},
	width = 320 - margin.left - margin.right,
	height = 480 - margin.top - margin.bottom;

var radius = 50;
var gap = 5;

var imageWidth = 150;
var imageHeight = 150;

var hexbin = d3.hexbin()
	.size([width/2, height/2])
	.radius(radius);

var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.style("background-color", "#f50")
  .append("g");


var defs = svg.append('svg:defs');

//we make a mask object
var mask = defs.append("svg:mask")
	.attr("id", "imageMask")
  .append("path")
	.attr("class", "hexagon")
	.attr("d", hexbin.hexagon(radius - gap))
	.style("fill", "#fff");

svg.append('svg:g')
	.attr("transform", "translate(" + radius + "," + radius + ")")

  .append('svg:image')
	.attr("mask", "url(#imageMask)")
	.attr('xlink:href', 'images/me.jpg')
	.attr('x', -imageWidth/2)
	.attr('y', -imageHeight/2)
	.attr('width', imageWidth)
	.attr('height', imageHeight)
	.attr("transform", "scale(0)")
	.transition()
	.duration(300)
	.attr("transform", "scale(1)");



