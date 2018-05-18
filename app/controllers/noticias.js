module.exports.noticias = function(application, req , res){
    var conn = application.config.dbConnection();
	var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

	NoticiasDAO.getNoticias(function(error, result){
		res.render("noticias/noticias", {noticias: result});
	});  
}

module.exports.noticia = function(application, req , res){
    var conn = application.config.dbConnection();
	var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

	var query = req.query;

	NoticiasDAO.getNoticia(query, function(error, result){
		res.render("noticias/noticia", {noticia: result});
	});
}