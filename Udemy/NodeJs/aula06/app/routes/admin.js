module.exports = function(application){

	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		var connection = application.config.dbConnection();
	 	//var noticiasModel = application.app.models.noticiasModel;	
	 	//var noticiasModel = new application.app.models.noticiasModel;	
	 	//var noticiasModel = new application.app.models.noticiasModel(connection);	
	 	var noticiasModel = new application.app.models.NoticiasDAO(connection);	
	 	/*
	 	noticiasModel.salvarNoticia(noticia, connection, function(error, result){	 			
			//res.render("noticias/noticias", {noticias : result});
			res.redirect('/Noticias');
		});
		*/
		noticiasModel.salvarNoticia(noticia, function(error, result){	 			
			//res.render("noticias/noticias", {noticias : result});
			res.redirect('/Noticias');
		});

	});
}