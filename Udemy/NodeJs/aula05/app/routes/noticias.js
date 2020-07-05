var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

	var connection = dbConnection(); 

	app.get('/noticias', function(req, res){

		/*var mysql = require('mysql');

		var connection = mysql.createConnection({
			host : '127.0.0.1',
			user : 'root',
			password : '1234',
			database : 'portal_noticias'
		}); */ 

		connection.query('select * from noticias', function(error, result){
			//res.send(result);
			//console.log(result);
			//res.send(error);
			//console.log(error);
			res.render("noticias/noticias", {noticias : result});
		});	
		//res.render("noticias/noticias");
	});
};	