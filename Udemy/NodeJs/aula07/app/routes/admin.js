module.exports = function(application){

	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia", {validacao : {}, noticia : {} });
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		console.log(noticia);
		req.assert('titulo', 'Título é Obrigatorio').notEmpty();
		req.assert('resumo', 'Resumo é Obrigatorio').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
		req.assert('autor', 'Autor é Obrigatorio').notEmpty();		
        req.assert('data_noticias', 'Data é obrigatório').notEmpty(); //.isDate({format: 'YYYY-MM-DD'});		
        //req.assert('data_noticias', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});		
		//req.assert('data_noticias', 'Data é obrigatório').isValidDate({format: 'YYYY-MM-DD'});
		//req.assert('data_noticias', 'Data dos fatos é Obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});		
		//req.assert('data_noticias', 'Data dos fatos é Obrigatorio').isValidDate();
		req.assert('noticia', 'Noticia é Obrigatorio').notEmpty();

		
		var erros = req.validationErrors();

        if(erros){
        	console.log(erros);
            res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
            return;
        }               

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
			res.redirect('/noticias');
		});		

	});
}