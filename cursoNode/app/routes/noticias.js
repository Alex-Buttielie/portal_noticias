module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        var client = app.config.dbConnection();
        
        var query = 'select * from noticias';

        client.query(query, function (error, result) {
            res.render("noticias/noticias", { noticias: result.rows });
        });

    });
}

