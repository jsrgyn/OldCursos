module.exports.iniciaChat = function(application, req, res){
	var dadosForm = req.body;
	console.log(dadosForm);

	req.assert('apelido', 'Nome ou apelido é obrigatorio').notEmpty();
	req.assert('apelido', 'Nome ou apelido deve conter entre 3 ou 15 caracteres').len(3, 15)

	var erros = req.validationErrors();

	if(erros){
		//res.send('Existem erros no formulário');
		//return;
		res.render("index", {validacao : erros});

	}
/*
	application.get('io').emit(
		  'msgParaCliente',
		  'Teste'
	);
*/
	application.get('io').emit(
		  'msgParaCliente',
		  {apelido: dadosForm.apelido,
		  	mensagem: 'acabou de entrar no chat'}
	);

	res.render("chat", {dadosForm: dadosForm});
}