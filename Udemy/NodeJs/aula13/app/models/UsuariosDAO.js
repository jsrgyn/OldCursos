/*Importar o módulo do crypto*/
var crypto = require("crypto");

function UsuariosDAO(connection){
  console.log('objeto carregado');
  this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	console.log(usuario);
	console.log(this._connection);	 	
	this._connection.open(function(err, mongoClient){
		mongoClient.collection("usuarios", function(err, collection){
			console.log(usuario.senha);

			var senha_criptografada = crypto.createHash("md5").update(usuario.senha).digest("hex");
			console.log(senha_criptografada);

			usuario.senha = senha_criptografada;


			collection.insert(usuario);

			//Fechando a conexão, se não ele vai acomulando conexões.
			mongoClient.close();
		});
	}); 
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
	console.log(usuario);
	this._connection.open(function(err, mongoClient){
	mongoClient.collection("usuarios", function(err, collection){
		//assim
		//collection.find({usuario: {$eq: usuario.usuario}, senha: {$eq: usuario.senha}});
		//ou assim

		var senha_criptografada = crypto.createHash("md5").update(usuario.senha).digest("hex");
		usuario.senha = senha_criptografada;


		collection.find(usuario).toArray(function(err, result){			
			console.log(result);
			if(result[0] != undefined){
				req.session.autorizado = true;

				/*Criando variaveis na sessão do usuario*/
				req.session.usuario = result[0].usuario;
				req.session.casa = result[0].casa;
			}

			if(req.session.autorizado){
				//res.send('Usuário foi autorizado no banco');
				console.log('Usuário foi autorizado no banco');
				res.redirect("jogo");
			} else {
				//res.send('usuario não existe no banco de dados'); 
				console.log('usuario não existe no banco de dados'); 
				res.render("index", {validacao: {}});
			}
		});

		//Fechando a conexão, se não ele vai acomulando conexões.
		mongoClient.close();
	});
});
}

module.exports = function(){
	return UsuariosDAO;
}