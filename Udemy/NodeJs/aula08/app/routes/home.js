module.exports = function(application){
	application.get('/', function(req, res){	
		//res.render("home/index");
		application.app.controllers.home.index(application, req, res);
	});
}