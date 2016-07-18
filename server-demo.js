var url = require("url");
var http = require("http");

var PORT = 8080;

var server = http.createServer();

server.listen(PORT, function(){
	console.log("I'm working check me out.");
});

function handleRequest(request, response) {

	var url_parts = url.parse(request.url);

	switch( url_parts.pathname ) {

		case "/":
			display_root(url_parts.pathname, request, response);
			break;
		case "/portfolio":

		default:
			break;
	}
}