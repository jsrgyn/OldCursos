module.exports = function(application){
	application.get('/', function(req, res){

		res.render('xyz');
		/*
		res.format({
			html: function(){
				res.send('Bem vindo a sua app NodeJS!');
			},

			json:  function(){
				var retorno = {
					body: 'Bem vindo a sua app NodeJS!'
				}
				res.json(retorno);
			}
		})

		//res.send('Bem vindo a sua app NodeJS!');
		*/
	});


	application.post('/', function(req, res){
		//res.send('teste');
		var dados = req.body;
		res.send(dados);
	});
}

