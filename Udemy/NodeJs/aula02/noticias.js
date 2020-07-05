/*console.log('Criando um site de noticias com NodeJS');*/

var http = require('http');
/*
Pode ser assim


var server = http.createServer(function(req, res){

	res.end("<html><body>Portal de notícias</body></html>");

});

server.listen(3000);
*/

//Ou assim
/*
http.createServer(function(req, res){

	res.end("<html><body>Portal de notícias</body></html>");

}).listen(3000);
*/

var server = http.createServer(function(req, res){

	var categoria = req.url;

	if (categoria == '/tecnologia') {
		res.end("<html><body>Notícias de tecnologia</body></html>");
	} else if (categoria == '/moda') {
		res.end("<html><body>Notícias de Moda</body></html>");
	} else if (categoria == '/beleza') {
		res.end("<html><body>Notícias de beleza</body></html>");
	} else {
		res.end("<html><body>Portal de notícias</body></html>");
	}

	

});

server.listen(3000);

