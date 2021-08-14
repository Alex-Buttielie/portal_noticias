module.exports = function (app) {

    app.get('/formulario_inclusao_noticia', function (req, res) {

        var client = app.config.dbConnection();

        //var query = 'select * from form_add_noticia';

        client.query(' ', function (error, result) {
            res.render("admin/form_add_noticia", {form_add_noticia: result.rows });
        });
    
    });
}
