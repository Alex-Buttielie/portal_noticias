var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {

    var client = dbConnection();

    app.get('/noticias', function (req, res) {

        client.connect();

        var query = 'select * from noticias';

        client.query(query, function (error, result) {
            res.render("noticias/noticias", { noticias: result.rows });
        });

    });
}

