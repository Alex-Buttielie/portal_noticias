module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        var client = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(client);

        noticiasModel.getNoticias(function (error, result) {
            res.render("noticias/noticias", { noticias: result.rows });
        });

    });
}

