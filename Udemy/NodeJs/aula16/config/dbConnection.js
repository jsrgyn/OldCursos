/* importar o mongodb */
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'got';

var connMongoDB = function(dados){
	console.log('Entrou na função de conexão');

	mongo.connect(url, function(err, client){
		assert.equal(null, err);
		console.log("Connected sucessfully to Server");
		const db = client.db(dbName);
		query(db, dados);
		client.close();
	});
};

function query(db, dados){
	var collection = db.collection(dados.collection);
	switch (dados.operacao){
		case "inserir": collection.insertOne(dados.usuario, dados.callback);
		break;
	default: break;
	}
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