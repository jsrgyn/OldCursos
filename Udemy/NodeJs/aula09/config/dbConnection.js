var mysql = require('mysql');

var ConnMySQL = function(){
	console.log('Conexão com banco de dados foi estabelecida');
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '1234',
		database : 'portal_noticias'
	});
}


module.exports = function(){
	console.log('O autoload carregou o módulo de conexão com bd');
	return ConnMySQL;
}		