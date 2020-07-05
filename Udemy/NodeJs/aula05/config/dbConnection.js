var mysql = require('mysql');

module.exports = function() {
	return mysql.createConnection({
		host : '127.0.0.1',
		user : 'root',
		password : '1234',
		database : 'portal_noticias'
	});
}		