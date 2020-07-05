/*
var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
*/
//Ou assim:
var express = require('express'),
 	bodyParser = require('body-parser'),
 	multiparty = require('connect-multiparty'),
 	mongodb = require('mongodb'),
 	objectId = require('mongodb').ObjectId,
 	fs = require('fs'); //FS é modulo nativo no NodeJS.

 var app = express();

 //body-parser
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
 app.use(multiparty());

 app.use(function(req, res, next){
 	//Habilita requisições cross domanin
 	res.setHeader("Access-Control-Allow-Origin", "*");
 	//Habilita quais os metos o cliente pode requisitar.
 	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
 	//Habilitar para que as requisições tenha cabeçalhos reescritos.
 	res.setHeader("Access-Control-Allow-Headers", "content-type");
 	//
 	res.setHeader("Access-Control-Allow-Credentiais", true);

 	next();
 })

 var port = 8080;

 app.listen(port);

 var db = new mongodb.Db(
 		'instagram',
 		new mongodb.Server('localhost', 27017, {}),
 		{}
 	);

 console.log('Servidor HTTP esta escutando na porta ' + port);

 app.get('/', function(req, res){
 	//var resposta = {msg: 'Olá'};
 	//res.send(resposta);
 	res.send({msg: 'Olá'});
 });

//URI + verbo HTTP <-- É aqui que começa o processo de RestFull
//POST (Create)
 app.post('/api', function(req, res){

 	//res.setHeader("Access-Control-Allow-Origin", "http://localhost:80");
 	//res.setHeader("Access-Control-Allow-Origin", "*");

 	//var dados = req.body;

 	//console.log(dados);

 	var date = new Date();
 	time_stamp = date.getTime(); 

 	var url_imagem = time_stamp + '_' + req.files.arquivo.originalFilename;

 	console.log(req.files);

 	var path_origem = req.files.arquivo.path;
 	var path_destion = './uploads/' + url_imagem;

 	

 	fs.rename(path_origem, path_destion, function(err){
 		if(err){
 			res.status('500').json({error : err});
 			return;
 		}
 	  var dados = {
 	  	url_imagem: url_imagem,
 	  	tilulo: req.body.titulo  
 	  }	

	 	//res.send(dados);

	 	//res.send(dados);
	 	db.open( function(err, mongoclient){
	 		mongoclient.collection('postagens', function(err, collection){
	 			collection.insert(dados, function(err, records){
	 				if(err){
	 					res.json(err);
	 				} else {
	 					res.json(records);
	 				}
	 				mongoclient.close();
	 			});
	 		});
	 	});
	 });
 });

 //GET (ready - Ler os documentos)
 app.get('/api', function(req, res){ 	

 	//res.setHeader("Access-Control-Allow-Origin", "*");

 	db.open( function(err, mongoclient){
 		mongoclient.collection('postagens', function(err, collection){
 			collection.find().toArray(function(err, result){
 				if(err) {
 					res.json(err);
 				} else {
 					res.json(result);
 				}
 				mongoclient.close();
 			});				 				
 		});
 	});
});

//GET by ID (ready - Ler os documentos por um ID)
app.get('/api/:id', function(req, res){ 	
	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.find(objectId(req.params.id)).toArray(function(err, result){
				if(err) {
					res.json(err);
				} else {
					/*
					Passando status do HTTP para o cliente
					POST 		Json					
					200 (ok) 	status: 1 = SUCESSO
					400			status: 2 = PARAMETROS INVALIDOS
					409 		status: 3 = DUPLICIDADE
					500			status: 4 = ERRO INTERNO
					GET 		Json					
					200 (ok) 	status: 1 = SUCESSO
					404			status: 2 = NÃO LOCALIZADO
					500			status: 3 = ERRO INTERNO
					PUT 		Json					
					200 (ok) 	status: 1 = SUCESSO
					400			status: 2 = PARAMETROS INVALIDOS
					304 		status: 3 = SEM MODIFICAÇÕES
					500			status: 4 = ERRO INTERNO
					DELETE 		Json					
					200 (ok) 	status: 1 = SUCESSO
					400			status: 2 = PARAMETROS INVALIDOS					
					500			status: 4 = ERRO INTERNO


					*/
					res.status(200).json(result);
				}
				mongoclient.close();
			});				 				
		});
	});
});

app.get('/imagens/:imagem', function(req, res){

	var img = req.params.imagem;
	fs.readFile('./uploads/' + img, function(err, content){
		if(err){
			res.status(400).json(err);
			return;
		}
		res.writeHead(200, {'content-type' : 'image/jpg'});
		res.end(content);

	});
}); 	

//PUT by ID (update - Atualizar um documento por um ID)
app.put('/api/:id', function(req, res){ 	
	//res.send('rota para atualização!');
	//res.send(req.params.id);
	//res.send(req.body.comentario);

	/*
	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.update(
				{ _id: objectId(req.params.id)},
				{ $set: { titulo : req.body.titulo}},
				{},
				function(err, records){
					if(err){
						res.json(err);
					} else {
						 res.json(records);
					}
					mongoclient.close();
				}
			);
		});				 				
	});
	*/

	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.update(
				{ _id: objectId(req.params.id)},
				{ $push: {
							comentarios : {
								id_comenterio : new objectId(),
								comentario : req.body.comentario
							}
						}

				},
				{},
				function(err, records){
					if(err){
						res.json(err);
					} else {
						 res.json(records);
					}
					mongoclient.close();
				}
			);
		});				 				
	});

});

//DELETE by ID (delete "Remover" - Exclui um documento por um ID)
app.delete('/api/:id', function(req, res){ 	

	//res.send(req.params.id);
	/*
	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.remove({_id : objectId(req.params.id)},
				function(err, records){
					if(err){
						res.json(err);
					} else {
						res.json(records);
					}			
					mongoclient.close();
				});
		});				 				
	});
	*/
	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.update(
				{},
				{ $pull:  {
							comentarios: { id_comenterio: objectId(req.params.id)}
							 }
					},
				{multi: true },
				function(err, records){
					if(err){
						res.json(err);
					} else {
						res.json(records);
					}			
					mongoclient.close();
				}
			);
		});				 				
	});
});
