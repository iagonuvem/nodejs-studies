module.exports.index = function(application, req, res){

    var conn = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

    NoticiasDAO.get5LastNoticias(function(error, result){
        res.render("home/index" , {noticias: result});
    });

   
}