/* importar as configurações do servidor */
//var app = require('./config/server.js'); ou
var app = require('./config/server');

/*Parametrizar a porta de escuta*/
/*
app.listen(80, function(){
	console.log('Servidor OnLine');
});
*/
//Ajustando o APP para suportar o socket.io
var server = app.listen(80, function(){
	console.log('Servidor OnLine');
});

var io = require('socket.io').listen(server);

//Definindo uma variavel para uso Global
app.set('io', io);

/*criar a conexão por websocket*/
io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

	socket.on('msgParaServidor', function(data){

		/* dialogo*/
		socket.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
			);

		/*Emitir mensagem para todos que estão conectado*/
		socket.broadcast.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
			);

		/* participante*/
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){

			socket.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
				);

			/*Emitir mensagem para todos que estão conectado*/
			socket.broadcast.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
				);
		}

	});

});

//Agora configurar o server.js