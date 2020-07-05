module.exports.jogo = function(application, req, res){
	
	/*
	if(req.session.autorizado){
		res.render('jogo', {img_casa : req.session.casa});			
	} else
	  res.send('Usuário precisa fazer login');
	*/
	if(req.session.autorizado != true){
		res.send('Usuário precisa fazer login');
		return;		
	}
	/*
	var comando_invalido = 'N';
	if(req.query.comando_invalido == 'S'){
		comando_invalido = 'S';
	}
	console.log(comando_invalido);
	*/
	var msg = '';
	if(req.query.msg != ''){
		msg = req.query.msg;
	}
	console.log(msg);

	var usuario = req.session.usuario;
	var casa = req.session.casa;

	var connection = application.config.dbConnection;  	
  	var JogosDAO = new application.app.models.JogosDAO(connection);

  	JogosDAO.iniciaJogo(res, usuario, casa, msg);


	//res.render('jogo', {img_casa : req.session.casa});
}

module.exports.sair = function(application, req, res){
	//res.send('Sair');
	req.session.destroy(function(erro){
		res.render("index", {validacao: {}})
	});
}

module.exports.suditos = function(application, req, res){		
		res.render("aldeoes", {validacao: {}});	
}

module.exports.pergaminhos = function(application, req, res){		
	if(req.session.autorizado != true){
		res.send('Usuário precisa fazer login');
		return;		
	}

	/*recuperar as ações inseridas no banco de dados*/
	var connection = application.config.dbConnection;
	var JogosDAO = new application.app.models.JogosDAO(connection);

	var usuario = req.session.usuario;

	JogosDAO.getAcoes(usuario, res);

	//res.render("pergaminhos", {validacao: {}});	
}

module.exports.ordenar_acao_sudito = function(application, req, res){		
	
	if(req.session.autorizado != true){
		res.send('Usuário precisa fazer login');
		return;		
	}

	var dadosForm = req.body;

	req.assert('acao', 'Ação deve ser informada').notEmpty();
	req.assert('quantidade', 'Quantidade deve ser informada').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		//res.redirect('jogo?comando_invalido=S');
		res.redirect('jogo?msg=A');
		return;
	}
	console.log(dadosForm);
	//res.send('tudo ok!');
	var connection = application.config.dbConnection;
	var JogosDAO = new application.app.models.JogosDAO(connection);

	dadosForm.usuario = req.session.usuario;
	JogosDAO.acao(dadosForm);
	//res.send('tudo ok');
	res.redirect('jogo?msg=B');
}

module.exports.revogar_acao = function(application, req, res){		
	var url_query = req.query;
	//res.send(url_query);
	var connection = application.config.dbConnection;
	var JogosDAO = new application.app.models.JogosDAO(connection);

	var _id = url_query.id_acao;
	JogosDAO.revogar_acao(_id, res);
	

}


