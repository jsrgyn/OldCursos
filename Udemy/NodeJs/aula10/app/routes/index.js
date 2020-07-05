module.exports = function(application){
	application.get('/', function(req, res){
		//res.send('Teste');
		//res.render("index.ejs"); ou
		//res.render("index");
		application.app.controllers.index.home(application, req, res)
	});
}