/*
var http = require('http');

var opcoes = {
	hostname: 'localhost',
	port: 80,
	path: '/',
	headers: {
		//'Accept' : 'text/html'
		'Accept' : 'application/json'

	}
}

var buffer_corpo_response = [];

//http.get('http://localhost', function(res){
http.get(opcoes, function(res){	

	res.on('data', function(pedaco){
		console.log('' + pedaco);
		console.log(pedaco);
		buffer_corpo_response.push(pedaco);
	});

	res.on('end', function(){
		var corpo_responde = Buffer.concat(buffer_corpo_response).toString(); 

		console.log(corpo_responde);

	});

	res.on('error', function(){

	});
});

*/
/*
var http = require('http');

var opcoes = {
	hostname: 'localhost',
	port: 80,
	path: '/',
	method: 'post',
	headers: {
		'Accept' : 'application/json',
		//'Content-type' : 'application/x-www-form-urlencoded'
		'Content-type' : 'application/json'
	}
}

//Content-type
var html = 'nome=José'; //x-www-form-urlencoded
var json = {nome : 'José'};
var string_json = JSON.stringify(json);

var buffer_corpo_response = [];

var req = http.request(opcoes, function(res){	

	res.on('data', function(pedaco){
		console.log('' + pedaco);
		console.log(pedaco);
		buffer_corpo_response.push(pedaco);
	});

	res.on('end', function(){
		var corpo_responde = Buffer.concat(buffer_corpo_response).toString(); 

		console.log(corpo_responde);

	});
	
});

//req.write(html);
req.write(string_json);
req.end();
*/

var http = require('http');

var opcoes = {
	hostname: 'localhost',
	port: 80,
	//path: '/teste',
	path: '/',
	method: 'get',
	headers: {
		'Accept' : 'application/json',
		//'Content-type' : 'application/x-www-form-urlencoded'
		'Content-type' : 'application/json'
	}
}

var buffer_corpo_response = [];

var req = http.request(opcoes, function(res){	

	res.on('data', function(pedaco){
		console.log('' + pedaco);
		console.log(pedaco);
		buffer_corpo_response.push(pedaco);
	});

	res.on('end', function(){
		var corpo_responde = Buffer.concat(buffer_corpo_response).toString(); 

		console.log(corpo_responde);
		console.log(res.statusCode);

	});
	
});
req.end();