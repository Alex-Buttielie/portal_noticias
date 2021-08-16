module.exports = function (application) {

    application.get('/noticia', function (req, res) {

        var client = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(client);

        noticiasModel.getNoticia(function (error, result) {
            res.render("noticias/noticia", {noticia: result.rows});
        })
    });
}

