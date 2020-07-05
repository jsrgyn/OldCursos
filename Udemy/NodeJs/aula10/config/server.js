/* Começar importar os módulos */
/*Importar o módulo do frameword express*/
var express = require('express');
/*Importar o módulo do consign*/
var consign = require('consign');
/*importar o módulo body-parser*/
var bodyParser = require('body-parser');
/*importar o módulo do expresso-validator*/
var expressValidator = require('express-validator');

/*Iniciar o objeto do express*/
var app = express();

/*Configurar os modulos*/
/*Setar as variáveis 'View engine' e 'Views' do express*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*Configurar o middleware express.static*/
//Para indicar um middleware utiliza a função use
app.use(express.static('./app/public'));

/*Configurar o middleware body-parser*/
app.use(bodyParser.urlencoded({extended: true}));

/*Configurar o middleware express-validator*/
app.use(expressValidator());

/*Configurar o consign*/
/*Efetua o autoload das rotas, dos models e dos controllers para o objeto app*/
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);


/*Exportar o objeto app*/
module.exports = app;

