module.exports.cadastro = function(application, req, res){

	res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){  
  //res.send('Testes - Vamos castrar');
  var dadosForm = req.body;

  console.log(dadosForm);

  req.assert('nome', 'Nome não pode ser vazio').notEmpty();
  req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
  req.assert('senha', 'Senha não pode ser vazio').notEmpty();
  req.assert('casa', 'Casa não pode ser vazio').notEmpty();  

  var erros = req.validationErrors();

  if(erros){
  	 //res.send('existem erros no formulário');
  	 res.render('cadastro', {validacao: erros, dadosForm : dadosForm})
  	 return;
  }

  var connection = application.config.dbConnection;
  console.log(connection);


  var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

  UsuariosDAO.inserirUsuario(dadosForm);

  res.send('Podemos cadastrar');	
}