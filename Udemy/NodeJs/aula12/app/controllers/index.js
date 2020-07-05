module.exports.index = function(application, req, res){
	res.render('index', {validacao: {}});
}

module.exports.autenticar = function(application, req, res){
	//res.send('Chegou no controller');
	console.log('Chegou no controller');
	var dadosForm = req.body;

	req.assert('usuario', 'Usuário não deve ser vazio').notEmpty();
	req.assert('senha', 'Senha não deve ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("index", {validacao: erros});
		return;
	}

	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.autenticar(dadosForm, req, res);

	//res.send('Tudo ok para criar a sessão');
	//res.render('index');
}