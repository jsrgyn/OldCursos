module.exports = function(application){
	application.get('/cadastro', function(req, res){		
		//res.render('cadastro');
		application.app.controllers.cadastro.cadastro(application, req, res);
	});


	application.post('/cadastrar', function(req, res){		
		//res.render('cadastro');
		application.app.controllers.cadastro.cadastrar(application, req, res);
	});
}