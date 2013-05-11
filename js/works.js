var works = [
        {
            title       : "Web",
            thumbUrl    : "me.jpg",
            tags        : [],
            content     : [
                {
                    title       : "Neiio",
                    thumbUrl    : "trame.png",
                    content     : [
                        {
                            title       : "Neiio Connect Page",
                            thumbUrl    : "",
                            imageUrl    : ""
                        },
                        {
                            title       : "Neiio Organize Page",
                            thumbUrl    : "",
                            imageUrl    : ""
                        }
                    ]
                },
                {
                    title       : "CSI",
                    thumbUrl    : "logo_kamal.png",
                    content     : [
                        {
                            title       : "Neiio Connect Page",
                            thumbUrl    : "",
                            imageUrl    : ""
                        },
                        {
                            title       : "Neiio Organize Page",
                            thumbUrl    : "",
                            imageUrl    : ""
                        }
                    ]
                }
            ]
        },
        {
            title       : "Logos",
            thumbUrl    : "Marrakech-Airport.jpg",
            tags        : [],
            content     : [
                {
                    title       : "Neiio",
                    thumbUrl    : "",
                    tags        : [],
                    content     : [
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" }
                    ]
                },
                {
                    title       : "HTag",
                    thumbUrl    : "",
                    tags        : [],
                    content     : [
                        { imageUrl: "" }
                    ]
                },
                {
                    title       : "Personal",
                    thumbUrl    : "",
                    tags        : [],
                    content     : [
                        { imageUrl: "" },
                        { imageUrl: "" }
                    ]
                },
                {
                    title       : "Zig-Zag Communication",
                    thumbUrl    : "",
                    tags        : [],
                    content     : [
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" }
                    ]
                },
                {
                    title       : "MAT Power",
                    thumbUrl    : "",
                    tags        : [],
                    content     : [
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" },
                        { imageUrl: "" }
                    ]
                }
            ]
        }
    ];





var margin = {top: 20, right: 20, bottom: 30, left: 40},
	width = 1000 - margin.left - margin.right,
	height = 700 - margin.top - margin.bottom;

var radius = 60;
var gap = 5;

var imageWidth = 150;
var imageHeight = 150;

var hexbin = d3.hexbin()
	.size([width / 2, height / 2])
	.radius(radius);



var bodySelection = d3.select("body");
//var workListSelection = bodySelection.select("#ul-works");

//var workItems = workListSelection.selectAll("li")
//    .data(works)
//    .enter()
//  .append("li")
//    .style("width", "100%")
//    .attr("class", "workListItem")
//    .text(function(d){
//        return d.title;
//    });

var workSVGSelection = bodySelection.select("#div-works-svg");

var svg = workSVGSelection.append("svg:svg")
	.attr("width", "100%")
	.attr("height", "100%")
	.style("background-color", "#f50")

    .append("svg:g")
    .attr("transform", "translate(50, 0)");

var definitions = svg.append("svg:defs");

//we make a mask object
var mask = definitions.append("svg:mask")
	.attr("id", "imageMask")

    .append("path")
	.attr("class", "hexagon")
	.attr("d", hexbin.hexagon(radius - gap))
	.style("fill", "#fff");


//var rootElementsContainer = svg.append("svg:g");


var categories = svg.selectAll("g")
    .data(works)
    .enter()

    .append("g")
	.attr("transform", function(d, i)
    {
        return "translate(" + (imageWidth * i) + "," + imageHeight / 2 + ")";
    })
    
    .append("svg:image")
	.attr("mask", "url(#imageMask)")
	.attr("xlink:href", function(d)
    {
        if( "thumbUrl" in d )
        {
            return "images/" + d.thumbUrl;
        }
    })
	.attr("x", -imageWidth / 2)
	.attr("y", -imageHeight / 2)
	.attr("width", imageWidth)
	.attr("height", imageHeight)
	.attr("transform", "scale(0)")
	.transition()
	.duration(300)
	.attr("transform", "scale(1)");



