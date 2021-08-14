module.exports = function (app) {
    app.get('/', function (req, res) {

        var client = app.config.dbConnection();

        var query = 'selehomect * from ';

        client.query(' ', function (error, result) {
            res.render("home/index", { index: result.rows });
        });

    });
}



