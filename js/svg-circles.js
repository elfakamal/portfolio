/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



var circles = skillsSVG.selectAll("circle")
	.data(skills)
	.enter()
	.append("circle");

circles.style("fill", "white")
	.style("stroke", "tomato")
	.attr("stroke-width", function(d)
	{
		return d.weight * 2;
	})

	.attr("cx", function(d, i)
	{
		return d.coordinates.x;
	})
	.attr("cy", function(d, i)
	{
		return d.coordinates.y;
	})
	.attr("r", function(d, i)
	{
		return d.weight * 5;
	})

	.on("mouseover", function()
	{
		d3.select(this).style("stroke", "darkorange");
		d3.select(this).style("cursor", "pointer");
	})
	.on("mouseout", function()
	{
		d3.select(this).style("stroke", "tomato");
	}).text("hello");



var texts = skillsSVG.selectAll("text")
	.data(skills)
	.enter()
	.append("text")

	.text(function(d)
	{
		return d.name;
	})
	.attr("x", function(d)
	{
		return d.coordinates.x;
	})
	.attr("y", function(d)
	{
		return d.coordinates.y + d.weight * 7 + 10;
	})

	.attr("text-anchor", "middle");



