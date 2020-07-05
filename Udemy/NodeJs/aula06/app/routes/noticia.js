module.exports = function(application) {

	 application.get('/noticia', function(req, res){

	 	var connection = application.config.dbConnection();
	 	//var noticiasModel = application.app.models.noticiasModel;
	 	//var noticiasModel = new application.app.models.noticiasModel;
	 	//var noticiasModel = new application.app.models.noticiasModel(connection);
	 	var noticiasModel = new application.app.models.NoticiasDAO(connection);
	 	/*
	 	noticiasModel.getNoticias(connection, function(error, result){
	 		res.render("noticias/noticia", {noticia : result});
	 	})
	 	*/
	 	noticiasModel.getNoticias(function(error, result){
	 		res.render("noticias/noticia", {noticia : result});
	 	})


	 	/*
	 	connection.query('select * from noticias where id_noticia = 2', function(error, result){			
				res.render("noticias/noticia", {noticia : result});
		});
		*/
	 });	
};	