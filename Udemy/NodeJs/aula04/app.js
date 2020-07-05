/*
Foi removido para modularizar o nosso projeto, incluido na class server.js

var express = require('express');
var msg = require('./mod_teste');

var app = express();

app.set('view engine', 'ejs');

*/
var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaTecnologia = require('./app/routes/tecnologia');
rotaTecnologia(app);

var rotaFormInclNoti = require('./app/routes/formulario_inclusao_noticias');
rotaFormInclNoti(app);

app.listen(3003, function(){
	console.log("Servidor ON");
});



