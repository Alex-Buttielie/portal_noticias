module.exports = function (app) {

    app.get('/noticia', function (req, res) {

        var client = app.config.dbConnection();
        
        var query = 'select * from noticias where id_noticias = 3';

        client.query(query, function (error, result) {
            res.render("noticias/noticia", { noticia: result.rows});
        });

    });
}

