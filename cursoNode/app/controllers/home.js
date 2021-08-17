module.exports.index = function (application, req, res) {
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getCincoUltimasNoticias(function(_error, result){
                console.log(result);
                res.render("home/index", {noticias : result.rows});
        }); 
}