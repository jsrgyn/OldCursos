/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
	console.log('Entrou na função de conexão');
	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexão
			{}
		),
	{}
	);
	return db;
}

module.exports = function(){
	//Se deixar aqui ele ira criar uma conexao quando subir o servidor,
	//por isto foi removido para uma função, para estabelecer uma conexão
	//Somente quando for usar.
	/*
	console.log('Entrou na função de conexão');
	var db = new mongo.db(
		'got',
		new mongo.Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexão
			{}
		),
	{}
	);
	return db;
	*/
	return connMongoDB;	
}