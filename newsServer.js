//Lets require/import the HTTP odule
var http = require('http');

//Lets define a port we want to listen to
var goodNewsPort=7000;
var badNewsPort=7050;

//We need a function which handles requests and send response
function handleGoodNews(request, response) {
//	response.end('Good News Works!! Path Hit: ' + request.url);

	this.goodNews = [
		"You are great",
		"You will succeed!",
		"This will be a great day for you!",
		"The Best is Yet to Come"
		];

	var rand = Math.floor((Math.random()*(this.goodNews.length-1)));

	response.end(this.goodNews[rand]);
}

function handleBadNews(request, response) {
	response.end('Bad News Works!! Path Hit: ' + request.url);
}

//Create a server
var goodNewsSvr = http.createServer(handleGoodNews);
var badNewsSvr = http.createServer(handleBadNews);

//Lets start our server
goodNewsSvr.listen(goodNewsPort, function() {
		//Callback triggered when server is successfully listening.  Hurray!
		console.log("Good News Server listening on: http://localhost:%s", goodNewsPort);
})

//Lets start our server
badNewsSvr.listen(badNewsPort, function() {
		//Callback triggered when server is successfully listening.  Hurray!
		console.log("Bad News Server listening on: http://localhost:%s", badNewsPort);
})