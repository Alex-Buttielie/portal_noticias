module.exports.noticias = function (application, req, res) {
    var client = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(client);

    noticiasModel.getNoticias(function (error, result) {
        res.render("noticias/noticias", { noticias: result.rows });
    });
}

module.exports.noticia = function (application, req, res) {
    var client = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(client);

    noticiasModel.getNoticia(function (error, result) {
        res.render("noticias/noticia", { noticia: result.rows });
    });
}