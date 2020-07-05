var express = require('express');
var app = express();

/*
//Sem usar ejs
app.get('/', function(req, res){
	res.send("<html><body>Portal de noticias</body></html>");
});

app.get('/tecnologia', function(req, res){
	res.send("<html><body>Portal de tecnologia</body></html>");
});

app.listen(3003, function(){
	console.log("Servidor rodando com Express");
});
*/

/*
//Usando ejs
app.set('view engine', 'ejs');

app.get('/tecnologia', function(req, res){
	res.render("secao/tecnologia");
});

app.get('/', function(req, res){
	res.send("<html><body>Portal de noticias</body></html>");
});

app.listen(3003, function(){
	console.log("Servidor rodando com Express");
});
*/
//Refatorando o app com ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res){
	res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
	res.render("noticias/noticias");
});

app.get('/tecnologia', function(req, res){
	res.render("secao/tecnologia");
});

app.listen(3003, function(){
	console.log("Servidor rodando com Express");
});



