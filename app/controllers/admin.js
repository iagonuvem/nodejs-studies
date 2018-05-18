module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia" , {validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = function(application, req, res){
    // req.body = pega os dados passados via POST
    var noticia = req.body;
        
    //Tratamento com Express Validator
    req.assert('titulo_noticia','Titulo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','Autor é obrigatorio').notEmpty();
    req.assert('autor','Autor deve conter entre 3 e 30 caracteres').len(3,30);
    req.assert('noticia','Noticia é obrigatorio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia}); // volta para formulario de noticia
        return; // para a função
    }

    var conn = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

    NoticiasDAO.salvarNoticia(noticia, function(error, result){
        res.redirect("/noticias");
    }); 
}