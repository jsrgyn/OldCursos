module.exports = function(application) {
	
	 application.get('/noticias', function(req, res){

	 	var connection = application.config.dbConnection();
	 	//var noticiasModel = application.app.models.noticiasModel;	
	 	//var noticiasModel = new application.app.models.noticiasModel;	
	 	//var noticiasModel = new application.app.models.noticiasModel(connection);	
	 	var noticiasModel = new application.app.models.NoticiasDAO(connection);	
	 	/*
	 	noticiasModel.getNoticias(connection, function(error, result){	 			
			res.render("noticias/noticias", {noticias : result});
		});
		*/
		noticiasModel.getNoticias(function(error, result){	 			
			res.render("noticias/noticias", {noticias : result});
		});
	 });	
};	