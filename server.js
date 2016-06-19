var express = require('express');
var app = express();
var portno = process.env.PORT || 3000;

var middleware = {
	requireauthentication : function (req , res , next) {
		console.log( "private route hit!");
		next();
	},
	logger : function( req, res, next){

		console.log('request :' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();

	}

	
};

app.use(middleware.logger);
app.get('/about',middleware.requireauthentication, function (req, res) {
	
	res.send("hello prabahar");
	// body...
});

app.use(express.static(__dirname + '/public'));
app.listen(portno, function ()
{
  		console.log("server is up and running at " + portno );
  			});
