function UsuariosDAO(connection){
  console.log('objeto carregado');
  this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	console.log(usuario);
	console.log(this._connection);	 	
	this._connection.open(function(err, mongoClient){
		mongoClient.collection("usuarios", function(err, collection){
			collection.insert(usuario);

			//Fechando a conexão, se não ele vai acomulando conexões.
			mongoClient.close();
		});
	}); 
}

module.exports = function(){
	return UsuariosDAO;
}