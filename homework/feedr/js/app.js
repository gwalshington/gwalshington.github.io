/*
  Please add all Javascript code to this file.
*/

$(document).ready(function()	{


	var sources = [{
		name: 'mashable',
		url: 'https://crossorigin.me/http://mashable.com/stories.json',
	},
	{
		name: 'digg',
		url: 'http://crossorigin.me/http://digg.com/api/news/popular.json'
	},
	{
		name: 'reddit',
		url: 'http://crossorigin.me/https://www.reddit.com/top.json'
	}
	]



	// var titleObject = {
	//   title: 'Presidents',
	//   description: 'A JSD Project'
	// };

	// 3
	// var titleTemplate = template(titleObject);

	// // 4
 // 	$('#title').append(titleTemplate);


	var source = $("#navHeader").html();
    var compiled = Handlebars.compile(source);
    var template = compiled(sites)

 // 	var source = $("#navHeader").html();
	// var template = Handlebars.compile(source);

	for(i=0; i<sources.length; i++)	{
		var sites = sources[i].name;
		var navSites = template(sites);
		$('#navHeader').append(navSites);
		console.log(sites);
		// $('.nav').append('<li><a href="'+ sources[i].url + '">'+ sources[i].name + '</a></li>')
	}

	

	


	

	var mashable = 'https://crossorigin.me/http://mashable.com/stories.json';
	var digg = 'http://crossorigin.me/http://digg.com/api/news/popular.json'
	




	// $.ajax({
	// 	url: digg,
	// 	type: 'GET',
	// 	success: function(response){
	// 		console.log(response);
	// 		var title = response.data.feed[0].content.title_alt
	// 		var image = response.data.feed[0].content.media.images[0].image_url
	// 		var tags = response.data.feed[0].content.tags
	// 		console.log();

	// },
	// 	error: function()	{
	// 		console.log("error");
	// 	}

	// })



});









//sample helper function
var help = models
help.hello("world")


