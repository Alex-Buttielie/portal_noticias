module.exports = function (application) {

    application.get('/formulario_inclusao_noticia', function (req, res) {
            res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('nome_autor', 'O campo autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'O campo data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'O campo noticia é obrigatório').notEmpty();
        req.assert('resumo', 'O Resumo deve conter de dez a cem caracteres').len(10, 100);

        var erros = req.validationErrors();

        if(erros){
            res.render("admin/form_add_noticia");
            return;
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticias(noticia, function(error, result){
            res.redirect('/noticias')
        })
    });
}
